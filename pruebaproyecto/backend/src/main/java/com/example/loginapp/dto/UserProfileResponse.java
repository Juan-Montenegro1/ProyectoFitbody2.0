package com.example.loginapp.dto;

import com.example.loginapp.model.User;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileResponse {
    private String firstName;
    private String lastName;
    private String email;
    private Double weight;
    private Integer age;
    private String country;
    private Double height;
    private String gender;
    private String goal;

    public static UserProfileResponse fromUser(User user) {
        return UserProfileResponse.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .weight(user.getWeight())
                .age(user.getAge())
                .height(user.getHeight())
                .country(user.getCountry())
                .gender(user.getGender().toString())
                .goal(user.getGoal().toString())
                .build();
    }
}
