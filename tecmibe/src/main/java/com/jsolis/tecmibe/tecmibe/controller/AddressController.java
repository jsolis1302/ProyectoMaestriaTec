package com.jsolis.tecmibe.tecmibe.controller;

import com.jsolis.tecmibe.tecmibe.dao.ClientDao;
import com.jsolis.tecmibe.tecmibe.model.Address;
import com.jsolis.tecmibe.tecmibe.model.Client;
import com.jsolis.tecmibe.tecmibe.service.AddressService;
import com.jsolis.tecmibe.tecmibe.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("addresses")
public class AddressController {

    @Autowired
    ClientService clientService;

    @Autowired
    AddressService addressService;




/*    @PostMapping("/clients/{clientId}/addresses")
    public ResponseEntity<Address> createAddress(@PathVariable int clientId, @RequestBody Address addressRequest){
        ResponseEntity<Client> client = clientService.getClientById(clientId);

       Optional<Client> client2 = clientDao.findById(clientId);

        Address address = clientService.getClientById(clientId).map(client ->{
            client.getAddresses().add(addressRequest);
            return addressService.saveAddress(addressRequest);
        });
        return new ResponseEntity<>(address, HttpStatus.CREATED);
    }*/
}
