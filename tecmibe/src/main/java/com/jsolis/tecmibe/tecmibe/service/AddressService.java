package com.jsolis.tecmibe.tecmibe.service;

import com.jsolis.tecmibe.tecmibe.dao.AddressDao;
import com.jsolis.tecmibe.tecmibe.dao.ClientDao;
import com.jsolis.tecmibe.tecmibe.exception.ResourceNotFoundException;
import com.jsolis.tecmibe.tecmibe.model.Address;
import com.jsolis.tecmibe.tecmibe.model.Client;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AddressService {
    @Autowired
    AddressDao addressDao;

    @Autowired
    ClientDao clientDao;


    public ResponseEntity<Address> saveAddress(Long clientId,Address addressRequest) {

        Address address =  clientDao.findById(clientId).map(client ->{
            client.getAddresses().add(addressRequest);
            return addressDao.save(addressRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found client with id = " + clientId));

      //Optional<Client> client = clientDao.findById(clientId);
        //if(client.)
        return new ResponseEntity<>(address, HttpStatus.CREATED);
    }
}
