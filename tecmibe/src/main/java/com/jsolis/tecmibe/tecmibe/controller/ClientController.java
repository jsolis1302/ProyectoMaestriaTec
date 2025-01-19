package com.jsolis.tecmibe.tecmibe.controller;

import com.jsolis.tecmibe.tecmibe.model.Client;
import com.jsolis.tecmibe.tecmibe.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("clients")
public class ClientController {

    @Autowired
    ClientService clientService;

    @GetMapping("allClients")
    public ResponseEntity<List<Client>> getAllClients(){
        return clientService.getAllProducts();
    }

    @GetMapping("client/{clientId}")
    public ResponseEntity<Client> getClientById(@PathVariable int clientId){
        return clientService.getClientById(clientId);
    }

    @GetMapping("allActiveClients")
    public ResponseEntity<List<Client>> getAllActiveClients(){
        return clientService.getAllActiveClients();
    }
}
