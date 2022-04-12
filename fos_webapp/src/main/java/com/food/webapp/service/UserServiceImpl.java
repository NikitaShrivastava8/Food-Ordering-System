package com.food.webapp.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.webapp.model.User;

import com.food.webapp.repository.RoleRepository;
import com.food.webapp.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	/*
	 * @Override public User saveUser(User user) { return userRepository.save(user);
	 * }
	 */
	
	
//	//creating user
//	@Override
//	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
//		
//		User local=this.userRepository.findByEmail(user.getEmail());
//		if(local != null)
//		{
//			System.out.println("User already Exists");
//			throw new Exception("User already present!!!");
//		}
//		else
//		{
//			//create user
//			for(UserRole ur :userRoles)
//			{
//				roleRepository.save(ur.getRole());
//			}
//			
//			user.getUserRoles().addAll(userRoles);
//			local=this.userRepository.save(user);
//			
//		}
//		
//		return local;
//	}

//	@Override
//	public List<User> getAllUsers() {
//
//		return userRepository.findAll();
//	}
//
//	@Override
//	public User getUserByEmail(String email) {
//
//		return userRepository.findByEmail(email);
//	}

	@Override
	public User saveUser(User user) {
		
		return userRepository.save(user);
	}
	

	

}
