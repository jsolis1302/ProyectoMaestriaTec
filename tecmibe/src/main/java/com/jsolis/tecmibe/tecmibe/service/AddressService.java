package com.jsolis.tecmibe.tecmibe.service;

import com.jsolis.tecmibe.tecmibe.dao.AddressDao;
import com.jsolis.tecmibe.tecmibe.model.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class AddressService {
    @Autowired
    AddressDao addressDao;


    public ResponseEntity<Address> saveAddress(Address address) {
        addressDao.save(address);
        return new ResponseEntity<>(address, HttpStatus.CREATED);
    }
}
