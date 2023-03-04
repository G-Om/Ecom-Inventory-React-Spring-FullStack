package com.Fullstack.Ecom_Inventory.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Fullstack.Ecom_Inventory.Entity.User;
import com.Fullstack.Ecom_Inventory.Repository.UserRepository;

@Component
@Service
public class LoginRegisterService {
	
	@Autowired
	private UserRepository userRepository;
	

	public User saveUser(User user) {
		if(user != null) {
			return userRepository.save(user);
		}
		return null; 		
	}
}
