package com.food.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.webapp.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	

}
