package com.example.employee_application.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDetails {
    
    public String firstName;
    public String lastName;
    public String joiningDate;
    public String role;
}
