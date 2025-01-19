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
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientDao clientDao;

    public ResponseEntity<List<Client>> getAllProducts() {
        try{
            return new ResponseEntity<>(clientDao.findAll(),HttpStatus.OK);

        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Client> getClientById(int clientId){
        //Optional<Client> client = clientDao.findById(clientId);
        //return  new ResponseEntity<>(client.orElse(new Client()),HttpStatus.OK);

        return  new ResponseEntity<>(clientDao.findById(clientId).orElse(new Client()),HttpStatus.OK);
    }

    public ResponseEntity<List<Client>> getAllActiveClients() {
        try{

            return new ResponseEntity<>(clientDao.findAllByActive(true),HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }
}
