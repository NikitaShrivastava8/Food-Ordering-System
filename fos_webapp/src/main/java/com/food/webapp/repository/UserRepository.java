package com.food.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.webapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	//public User findByEmail(String email);

}
