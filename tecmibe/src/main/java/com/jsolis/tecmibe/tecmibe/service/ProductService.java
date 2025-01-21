package com.jsolis.tecmibe.tecmibe.service;

import com.jsolis.tecmibe.tecmibe.dao.ProductDao;
import com.jsolis.tecmibe.tecmibe.model.Client;
import com.jsolis.tecmibe.tecmibe.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductDao productDao;

    public ResponseEntity<List<Product>> getAllActiveProducts() {
        try{

            return new ResponseEntity<>(productDao.findAllByActive(true),HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<List<Product>> getAllProducts() {
        try{
            return new ResponseEntity<>(productDao.findAll(),HttpStatus.OK);

        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Product> getProductById(long productId){

        return  new ResponseEntity<>(productDao.findById(productId).orElse(new Product()),HttpStatus.OK);
    }

    public ResponseEntity<Product> saveProduct(Product productRequest){
        Product product = productDao.save(new Product(productRequest.getName(),productRequest.getDescription(),productRequest.getImagePath(),productRequest.getPrice(),productRequest.getCode(),true));
        return new ResponseEntity<>(product,HttpStatus.CREATED);
    }
}
