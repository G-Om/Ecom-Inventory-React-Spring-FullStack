package com.Fullstack.Ecom_Inventory.Controller.EcomController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Fullstack.Ecom_Inventory.Entity.Product;
import com.Fullstack.Ecom_Inventory.Entity.User;
import com.Fullstack.Ecom_Inventory.Service.ProductService;

@RestController
@CrossOrigin
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	//Get a particular product by id
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable("id") Long id) {
		Product product = productService.getProductById(id)
				.orElseThrow(()-> new ConfigDataResourceNotFoundException(null));	
		
		return new ResponseEntity<>(product, HttpStatus.OK);
	}
	
	// Get List of all products
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> productList = new ArrayList<Product>();
		productList = productService.getAll();
		
		return new ResponseEntity<>(productList,HttpStatus.OK);
		}
	
	//Add New product (POST)
	@PostMapping("/products")
	public ResponseEntity<Product> newProduct(@RequestBody Product product) {
//		System.out.print(product.getName());
		return new ResponseEntity<>(productService.addNewProduct(product), HttpStatus.OK);
		
	}
	
	// Delete product
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Boolean> deleteProduct(@PathVariable("id") Long id ){
		Boolean product = productService.deleteProductById(id);
		return new ResponseEntity<>(product,HttpStatus.OK);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
		return new ResponseEntity<>(productService.addNewProduct(product), HttpStatus.OK);
		
	} 
}
















