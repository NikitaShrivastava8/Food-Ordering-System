package com.food.webapp.service;

import java.util.Set;


import com.food.webapp.model.Category;

public interface CategoryService {
	
	public Category addCategory(Category category );
	
	public Category updateCategory(Category category );
	
	public Set<Category> getAllCategory();
	
	public Category getCategory(Long categoryId );
	
	public void deleteCategory(Long categoryId);
}
