package com.jsolis.tecmibe.tecmibe.controller;

import com.jsolis.tecmibe.tecmibe.model.Product;
import com.jsolis.tecmibe.tecmibe.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
//@CrossOrigin(origins="http://localhost:4200")

public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/allActiveProducts")
    public ResponseEntity <List<Product>> getAllActiveProducts(){
        return productService.getAllActiveProducts();
    }

    @GetMapping("/allProducts")
    public ResponseEntity <List<Product>> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity <Product> getProductById(@PathVariable long productId){
        return productService.getProductById(productId);
    }
}
