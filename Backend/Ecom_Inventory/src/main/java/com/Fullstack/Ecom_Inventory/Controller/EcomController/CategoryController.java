package com.Fullstack.Ecom_Inventory.Controller.EcomController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Fullstack.Ecom_Inventory.Entity.Category;
import com.Fullstack.Ecom_Inventory.Service.CategoryService;

@RestController
@CrossOrigin
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	//Get a particular Category by id
	@GetMapping("/categories/{id}")
	public ResponseEntity<Category> getCategory(@PathVariable("id") Long id) {
		Category Category = categoryService.getCategoryById(id)
				.orElseThrow(()-> new ConfigDataResourceNotFoundException(null));	
		
		return new ResponseEntity<>(Category, HttpStatus.OK);
	}
	
	// Get List of all categories
	@GetMapping("/categories")
	public ResponseEntity<List<Category>> getAllCategorys() {
		List<Category> CategoryList = new ArrayList<Category>();
		CategoryList = categoryService.getAll();
		
		return new ResponseEntity<>(CategoryList,HttpStatus.OK);
		}
	
	//Add New Category (POST)
	@PostMapping("/categories")
	public ResponseEntity<Category> newCategory(@RequestBody Category Category) {
		return new ResponseEntity<>(categoryService.addNewCategory(Category), HttpStatus.OK);
		
	}
	
	// Delete Category
	@DeleteMapping("/categories/{id}")
	public ResponseEntity<Boolean> deleteCategory(@PathVariable("id") Long id ){
		Boolean category = categoryService.deleteCategoryById(id);
		
		return new ResponseEntity<>(category,HttpStatus.OK);
	}
}
