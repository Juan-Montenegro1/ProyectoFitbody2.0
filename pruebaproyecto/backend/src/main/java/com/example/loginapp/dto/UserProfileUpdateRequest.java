package com.example.loginapp.dto;

import lombok.Data;

@Data
public class UserProfileUpdateRequest {
    private String firstName;
    private String lastName;
    private Double weight;
    private Integer age;
    private String country;
    private Double height;
    private String gender;
    private String goal;
}    
