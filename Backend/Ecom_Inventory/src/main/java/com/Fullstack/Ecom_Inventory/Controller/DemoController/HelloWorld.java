package com.Fullstack.Ecom_Inventory.Controller.DemoController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
	
	
	@GetMapping("/hello")
	public String Hello() {
		return "Hello This is first Controller";
	}
}
