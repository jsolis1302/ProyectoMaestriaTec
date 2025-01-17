package com.jsolis.tecmibe.tecmibe.service;

import com.jsolis.tecmibe.tecmibe.dao.ClientDao;
import com.jsolis.tecmibe.tecmibe.dao.ProductDao;
import com.jsolis.tecmibe.tecmibe.model.Client;
import com.jsolis.tecmibe.tecmibe.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService {

    @Autowired
    ClientDao clientDao;

    public ResponseEntity<List<Client>> getAllProducts() {
        try{
            return new ResponseEntity<>(clientDao.findAll(),HttpStatus.OK);

        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }
}
