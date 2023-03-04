package com.Fullstack.Ecom_Inventory.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Fullstack.Ecom_Inventory.Entity.User;
import com.Fullstack.Ecom_Inventory.Repository.UserRepository;

@Component
@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	
	public Optional<User> getUserById(Long id) {
			return userRepository.findById(id);	
		}
}
