package com.jsolis.tecmibe.tecmibe.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int productId;
    public String name;
    public String description;
    public String imagePath;
    public double price;
    public String code;
    public boolean active;
}
