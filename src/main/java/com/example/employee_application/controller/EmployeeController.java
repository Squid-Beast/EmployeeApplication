package com.example.employee_application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee_application.service.EmployeeService;

import java.util.HashMap;
import java.util.Map;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/api/home")
    public String home() {
        return employeeService.homepage();
    }

    @GetMapping("/api/greet")
    public Map<String, String> greet(@RequestParam String name) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello, " + name + "! Welcome to the Employee Management System!");
        return response;
    }
}
