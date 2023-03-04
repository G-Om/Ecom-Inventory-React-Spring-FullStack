package com.Fullstack.Ecom_Inventory.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Fullstack.Ecom_Inventory.Entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
