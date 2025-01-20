package com.jsolis.tecmibe.tecmibe.dao;


import com.jsolis.tecmibe.tecmibe.model.Address;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AddressDao extends JpaRepository<Address,Long>{
}
