package com.example.employee_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employee_application.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    
}
