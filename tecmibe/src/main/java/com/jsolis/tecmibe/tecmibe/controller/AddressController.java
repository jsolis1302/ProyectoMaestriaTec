package com.jsolis.tecmibe.tecmibe.controller;



import com.jsolis.tecmibe.tecmibe.model.Address;
import com.jsolis.tecmibe.tecmibe.service.AddressService;
import com.jsolis.tecmibe.tecmibe.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private AddressService addressService;

    @PostMapping("/clients/{clientId}/addresses")
    public ResponseEntity<Address> createAddress(@PathVariable Long clientId, @RequestBody Address addressRequest){
        return addressService.saveAddress(clientId,addressRequest);
    }
    
}
