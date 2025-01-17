package com.jsolis.tecmibe.tecmibe.dao;

import com.jsolis.tecmibe.tecmibe.model.Client;
import com.jsolis.tecmibe.tecmibe.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientDao extends JpaRepository<Client,Integer>{


}
