package com.example.employee_application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee_application.pojo.EmployeeDetails;
import com.example.employee_application.pojo.SuccessResponse;
import com.example.employee_application.service.EmployeeService;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    @GetMapping("/search")
    public ResponseEntity<List<EmployeeDetails>> getEmployeesByFirstName(@RequestParam(name = "firstName") String firstName) {
        try {
            List<EmployeeDetails> employeeDetails = employeeService.getEmployeesByFirstName(firstName);
            return ResponseEntity.ok(employeeDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
    
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDetails>> getAllEmployees() {
        try {
            List<EmployeeDetails> employeeDetails = employeeService.findAllEmployees();
            return ResponseEntity.ok(employeeDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<?> addEmployee(@RequestBody EmployeeDetails employeeDetails) {
        employeeService.addEmployee(employeeDetails);
        return ResponseEntity.ok(new SuccessResponse("Employee added successfully!"));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateEmployee(@RequestParam(name = "firstName") String firstName, @RequestBody EmployeeDetails employeeDetails) {
        employeeService.updateEmployee(firstName, employeeDetails);
        return ResponseEntity.ok(new SuccessResponse("Employee updated successfully!"));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteEmployee(@RequestParam(name = "firstName") String firstName) {
        employeeService.deleteEmployee(firstName);
        return ResponseEntity.ok(new SuccessResponse("Employee deleted successfully!"));
    }
}