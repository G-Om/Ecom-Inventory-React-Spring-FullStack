package com.Fullstack.Ecom_Inventory.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.Fullstack.Ecom_Inventory.Entity.Category;
import com.Fullstack.Ecom_Inventory.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Fullstack.Ecom_Inventory.Entity.Product;
import com.Fullstack.Ecom_Inventory.Repository.ProductRepository;

@Service
@Component
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CategoryService categoryService;
	
	public Optional<Product> getProductById(Long id) {
		// TODO Auto-generated method stub
		return productRepository.findById(id);
	}

	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return productRepository.findAll();
	}

	public Product addNewProduct(Product product) {
		// TODO Auto-generated method stub
		if(product == null) {return null;}
		return productRepository.save(product);
	}

	public Boolean deleteProductById(Long id) {
		// TODO Auto-generated method stub
//		productRepository.findById(id).get().getCategories()
		Product product = productRepository.findById(id).get();
		product.setCategories(new ArrayList<Category>());
		productRepository.save(product);
		productRepository.deleteById(id);
		if(productRepository.findById(id)== null) {
			return true;
		}
		return false;
	}

}



















