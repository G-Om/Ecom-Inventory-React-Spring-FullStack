package com.Fullstack.Ecom_Inventory.Entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Entity
@Table(name = "Shop")
@AllArgsConstructor
@Data
public class Shop {

	public Shop() {
		super();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "shop_id")
	private Long shop_id;
	
	@Column(name = "ShopName")
	private String name;

	@Column(name = "Description")
	private String description;


}
