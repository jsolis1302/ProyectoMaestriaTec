package com.jsolis.tecmibe.tecmibe.controller;


import com.jsolis.tecmibe.tecmibe.dao.ClientDao;
import com.jsolis.tecmibe.tecmibe.dao.AddressDao;
import com.jsolis.tecmibe.tecmibe.exception.ResourceNotFoundException;
import com.jsolis.tecmibe.tecmibe.model.Address;
import com.jsolis.tecmibe.tecmibe.service.AddressService;
import com.jsolis.tecmibe.tecmibe.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AddressController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private AddressService addressService;

    @Autowired
    private ClientDao clientDao;

    @Autowired
    private AddressDao addressDao;



/*    @PostMapping("/clients/{clientId}/addresses")
    public ResponseEntity<Address> createAddress(@PathVariable int clientId, @RequestBody Address addressRequest){
        return addressService.saveAddress(clientId,addressRequest);
    }*/

    @PostMapping("/clients/{clientId}/addresses")
    public ResponseEntity<Address> createAddress(@PathVariable(value = "clientId")  Long clientId, @RequestBody Address addressRequest){
        Address address = clientDao.findById(clientId).map(client -> {
            client.getAddresses().add(addressRequest);
            return addressDao.save(addressRequest);
        }).orElseThrow( () -> new ResourceNotFoundException("nor found"));

        return new ResponseEntity<>(address, HttpStatus.CREATED);
    }
}
