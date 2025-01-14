package com.jsolis.tecmibe.tecmibe.dao;

import com.jsolis.tecmibe.tecmibe.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDao extends JpaRepository<Product,Integer>  {
}
