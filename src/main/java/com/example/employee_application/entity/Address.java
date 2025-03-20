package com.example.employee_application.entity;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "address")
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String fullName;
    @Column(name = "street_address")
    private String streetAddress;
    private String city;
    @Column(name = "state_province")
    private String state;
    private String country;
    @Column(name = "zip_code")
    private String zipCode;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
