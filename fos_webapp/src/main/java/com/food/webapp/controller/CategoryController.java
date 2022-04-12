package com.food.webapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.webapp.exception.ResourceNotFoundException;
import com.food.webapp.model.Category;
import com.food.webapp.repository.CategoryRepository;
import com.food.webapp.service.CategoryService;






@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	// create category rest api
		@PostMapping("/add")
		public Category createCategory(@RequestBody Category category) {
			return categoryRepository.save(category);
		}
	
	
		// get category by id rest api
		@GetMapping("/get/{categoryId}")
		public ResponseEntity<Category> getCategoryById(@PathVariable Long categoryId) {
			Category category = categoryRepository.findById(categoryId)
					.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + categoryId));
			return ResponseEntity.ok(category);
		}
	
	// get all catogories
		@GetMapping("/getAll")
		public List<Category> getAllCategories(){
			return categoryRepository.findAll();
		}
	
		// update category rest api
		
		@PutMapping("/update/{categoryId}")
		public ResponseEntity<Category> updateCategory(@PathVariable Long catId, @RequestBody Category CategoryDetails){
			Category category = categoryRepository.findById(catId)
					.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + catId));
			
			category.setCatId(CategoryDetails.getCatId());
			category.setCatName(CategoryDetails.getCatName());
		
			
			Category updatedCategory = categoryRepository.save(category);
			return ResponseEntity.ok(updatedCategory);
		}
	
	
	//delete category
	@DeleteMapping("/delete/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long categoryId)
	{
		this.categoryService.deleteCategory(categoryId);
	}
	
	

}
