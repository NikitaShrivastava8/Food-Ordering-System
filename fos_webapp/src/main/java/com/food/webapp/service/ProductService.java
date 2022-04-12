package com.food.webapp.service;

import java.util.Set;

import com.food.webapp.model.Product;

public interface ProductService {

	public Product addProduct(Product product );
	
	public Product updateProduct(Product product );
	
	public Set<Product> getAllProducts();
	
	public Product getProduct(Long productId);
	
	public void deleteProduct(Long productId);


}
