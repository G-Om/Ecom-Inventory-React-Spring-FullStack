package com.Fullstack.Ecom_Inventory.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Fullstack.Ecom_Inventory.Entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long>{

}

