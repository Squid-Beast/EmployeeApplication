package com.example.employee_application.pojo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SuccessResponse {
    public SuccessResponse(String message) {
        this.message = message;
    }

    private String message;
}
