package com.jsolis.tecmibe.tecmibe.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressId;
    private String street;
    private String numb;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    private String clientId;
    private String name;
}
