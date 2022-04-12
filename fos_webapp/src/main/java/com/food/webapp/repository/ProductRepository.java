package com.food.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.webapp.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
