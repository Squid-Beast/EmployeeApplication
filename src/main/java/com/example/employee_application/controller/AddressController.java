package com.example.employee_application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee_application.pojo.AddressDetails;
import com.example.employee_application.pojo.SuccessResponse;
import com.example.employee_application.service.AddressService;
import com.fasterxml.jackson.databind.JsonNode;

@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/addAddress")
    public ResponseEntity<?> addAddress(@RequestBody AddressDetails addressDetails) {
        addressService.addAddress(addressDetails);
        return ResponseEntity.ok(new SuccessResponse("Address added successfully!"));
    }
    
    // @GetMapping("/autocomplete")
    // public ResponseEntity<JsonNode> getAutocompleteSuggestions(@RequestParam String query) {
    //     JsonNode suggestions = addressService.getAutocompleteSuggestions(query);
    //     return ResponseEntity.ok(suggestions);
    // }

}
