package com.food.webapp;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

//import java.util.HashSet;
//import java.util.Set;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import com.food.webapp.model.Role;
import com.food.webapp.model.User;

import com.food.webapp.service.UserService;

//import com.food.webapp.model.Role;
//import com.food.webapp.model.User;
//import com.food.webapp.model.UserRole;
//import com.food.webapp.service.UserService;

@SpringBootApplication
public class FosWebappApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	

	public static void main(String[] args) {
		SpringApplication.run(FosWebappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Application Started");

		
//		 User user=new User();
//		  
//		  user.setEmail("admin@gmail.com");
//		  user.setPassword("admin");
//		  
//		 Role role1=new Role(); 
//		
//		 role1.setRoleName("ADMIN");
//		  
//		  
//		  Set<UserRole> userRoleSet=new HashSet<>(); 
//		  UserRole userRole=new UserRole();
//		  
//		  userRole.setRole(role1);
//		  
//		  userRole.setUser(user);
//		 
//		  userRoleSet.add(userRole);
//		  
//		  User user1=this.userService.createUser(user, userRoleSet);
//		  System.out.println(user1.getEmail());
		 
		 
	}

}
