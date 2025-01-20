package com.jsolis.tecmibe.tecmibe.dao;

import com.jsolis.tecmibe.tecmibe.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientDao extends JpaRepository<Client,Long>{

     List<Client> findAllByActive(boolean active);


}
