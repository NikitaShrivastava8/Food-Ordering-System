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
import com.food.webapp.model.Product;
import com.food.webapp.repository.ProductRepository;
import com.food.webapp.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductService productService;
	
	
	// create product rest api
			@PostMapping("/add")
			public Product createproduct(@RequestBody Product product) {
				return productRepository.save(product);
			}
		
		
		
			// get product by id rest api
			@GetMapping("/get/{productId}")
			public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
				Product product = productRepository.findById(productId)
						.orElseThrow(() -> new ResourceNotFoundException("product not exist with id :" + productId));
				return ResponseEntity.ok(product);
			}
		
			// get all products
			@GetMapping("/getAll")
			public List<Product> getAllProducts(){
				return productRepository.findAll();
			}
		
			
			//update product
			@PutMapping("/update/{productId}")
			public ResponseEntity<Product> updateProduct(@PathVariable Long menuId, @RequestBody Product ProductDetails){
				Product product = productRepository.findById(menuId)
						.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + menuId));
				
			
				product.setMenuName(ProductDetails.getMenuName());
				product.setPrice(ProductDetails.getPrice());
			
			
				
				Product updatedProduct = productRepository.save(product);
				return ResponseEntity.ok(updatedProduct);
			}
		
		

			//delete product
			@DeleteMapping("/delete/{productId}")
			public void deleteProduct(@PathVariable("productId") Long productId)
			{
				this.productService.deleteProduct(productId);
			}

}
