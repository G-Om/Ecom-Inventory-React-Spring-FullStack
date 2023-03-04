package com.Fullstack.Ecom_Inventory.Controller.EcomController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Fullstack.Ecom_Inventory.Entity.Category;
import com.Fullstack.Ecom_Inventory.Entity.Product;
import com.Fullstack.Ecom_Inventory.Entity.User;
import com.Fullstack.Ecom_Inventory.Repository.CategoryRepository;
import com.Fullstack.Ecom_Inventory.Repository.ProductRepository;
import com.Fullstack.Ecom_Inventory.Repository.UserRepository;
import com.Fullstack.Ecom_Inventory.Service.LoginRegisterService;
import com.Fullstack.Ecom_Inventory.Service.UserService;

@RestController
@CrossOrigin
public class LoginSignupController {
	@Autowired
	Category category;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	List<Category> catgs = new ArrayList<Category>();
	
	@Autowired
	Product product;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	LoginRegisterService service;
	@Autowired
	UserService userService;
	
	@GetMapping("/add-category")
	public Category AddCategory() {
		category.setCategory("shooes");
		categoryRepository.save(category);
		return categoryRepository.getById((long) 1);
	}
	
	@GetMapping("/add-product")
	public Product AddProduct() {
		product.setName("Tshirt");
		product.setBrand("Jockey");
		product.setPrize(525);
		product.setQuantity(10);
		catgs.add(categoryRepository.getById((long) 1));
		product.setCategories(catgs);
		productRepository.save(product);
		return null;
	}
	
	@PostMapping("/users/user")
	public User addUser(@RequestBody User user) {
		return service.saveUser(user);
	}
	@GetMapping("/users/user/{id}")
	public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
		User user = userService.getUserById(id)
				.orElseThrow(()-> new ConfigDataResourceNotFoundException(null));	
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}















