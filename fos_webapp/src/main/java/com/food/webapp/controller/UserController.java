package com.food.webapp.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.webapp.model.Role;
import com.food.webapp.model.User;

import com.food.webapp.repository.UserRepository;
import com.food.webapp.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	

	@PostMapping("/register")
	public String signUp(@RequestBody User user) throws Exception {
		// encoding password with bcrypt password encoder
		//user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

//		
//		  Set<UserRole> roles=new HashSet<>();
//		  
//		  Role role=new Role(); 
//		 
//		  role.setRoleName("NORMAL");
//		  
//		  UserRole userRole=new UserRole(); 
//		  userRole.setUser(user);
//		 userRole.setRole(role);
//		 
//		  
//		  roles.add(userRole);
		 
		 
		  //return this.userService.createUser(user, roles);
		
		userService.saveUser(user);
		return "New User Added";
    
		
	}

	@GetMapping("/adminlogin")
	public User logIn(@RequestBody User user)

	{   
          if(user.getEmail()=="admin@gmail.com" && user.getPassword()=="admin")
          {
        	  
          }
		return user;
	}

	@GetMapping("/getAll")
	public List<User> getAllUser() {
		return userRepository.findAll();

	}

}
