package com.example.employee_application.service;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    
    public String homepage() {
        return "Welcome to the Employee Management System!";
    }
}
