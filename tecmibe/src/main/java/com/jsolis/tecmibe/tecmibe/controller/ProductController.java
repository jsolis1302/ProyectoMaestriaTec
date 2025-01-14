package com.jsolis.tecmibe.tecmibe.controller;

import com.jsolis.tecmibe.tecmibe.model.Product;
import com.jsolis.tecmibe.tecmibe.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("products")
//@CrossOrigin(origins="http://localhost:4200")

public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("allProducts")
    public ResponseEntity <List<Product>> getAllProducts(){
        return productService.getAllProducts();
    }
}
