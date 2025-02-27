package com.example.employee_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee_application.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
