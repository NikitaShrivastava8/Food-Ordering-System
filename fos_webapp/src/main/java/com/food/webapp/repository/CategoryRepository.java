package com.food.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.webapp.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
   
	
}