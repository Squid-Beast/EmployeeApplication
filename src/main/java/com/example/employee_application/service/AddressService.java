package com.example.employee_application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee_application.entity.Address;
import com.example.employee_application.pojo.AddressDetails;
import com.example.employee_application.repository.AddressRepository;

@Service
public class AddressService {
    
    @Autowired
    private AddressRepository addressRepository;
    
    

    public AddressDetails addAddress(AddressDetails addressDetails) {
        Address address = new Address();
        address.setFullName(addressDetails.getFullName());
        address.setStreetAddress(addressDetails.getStreetAddress());
        address.setCity(addressDetails.getCity());
        address.setState(addressDetails.getState());
        address.setCountry(addressDetails.getCountry());
        address.setZipCode(addressDetails.getZipCode());
        addressRepository.save(address);
        return addressDetails;
    }

    
}
