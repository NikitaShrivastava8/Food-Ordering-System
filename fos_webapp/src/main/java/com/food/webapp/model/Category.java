package com.food.webapp.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

@Entity
@Table(name = "category")
public class Category {

	@Id
	

	@Column(name = "cat_id")
	private Long catId;
	
	@Column(name = "cat_name")
	private String catName;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	private Set<Product> product;

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(Long catId, String catName, Set<Product> product) {
		super();
		this.catId = catId;
		this.catName = catName;
		//this.product = product;
	}

	public Long getCatId() {
		return catId;
	}

	public void setCatId(Long catId) {
		this.catId = catId;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public Set<Product> getProduct() {
		return product;
	}

	public void setProduct(Set<Product> product) {
		this.product = product;
	}
	
	

}
