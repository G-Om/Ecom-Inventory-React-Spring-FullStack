package com.Fullstack.Ecom_Inventory.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.Fullstack.Ecom_Inventory.Entity.Category;
import com.Fullstack.Ecom_Inventory.Repository.CategoryRepository;

@Component
@Service
public class CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;
	
	public Optional<Category> getCategoryById(Long id) {
		// TODO Auto-generated method stub
		return categoryRepository.findById(id);
	}

	public List<Category> getAll() {
		// TODO Auto-generated method stub
		return categoryRepository.findAll();
	}

	public Category addNewCategory(Category Category) {
		// TODO Auto-generated method stub
		if(Category == null) {return null;}
		return categoryRepository.save(Category);
	}

	public boolean deleteCategoryById(Long id) {
		// TODO Auto-generated method stub
		categoryRepository.deleteById(id);
		if(categoryRepository.findById(id) == null) {
			return true;
		}
		return false;
	}
}
