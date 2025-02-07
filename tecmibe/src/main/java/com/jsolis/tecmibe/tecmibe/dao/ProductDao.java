package com.jsolis.tecmibe.tecmibe.dao;

import com.jsolis.tecmibe.tecmibe.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDao extends JpaRepository<Product,Long>  {
    List<Product> findAllByActive(boolean active);
}
