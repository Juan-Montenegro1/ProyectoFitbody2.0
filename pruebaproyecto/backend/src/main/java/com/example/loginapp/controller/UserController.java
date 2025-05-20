package com.example.loginapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginapp.dto.UpdateProfileRequest;
import com.example.loginapp.dto.UserProfileResponse;
import com.example.loginapp.enums.FitnessGoal;
import com.example.loginapp.enums.Gender;
import com.example.loginapp.model.User;
import com.example.loginapp.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/me")
    public ResponseEntity<UserProfileResponse> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        return ResponseEntity.ok(UserProfileResponse.fromUser(user));
    }

    @PutMapping("/me")
    public ResponseEntity<UserProfileResponse> updateProfile(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody UpdateProfileRequest request) {
        
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setWeight(request.getWeight());
        user.setAge(request.getAge());
        user.setHeight(request.getHeight());
        user.setGender(Gender.valueOf(request.getGender().toUpperCase()));
        user.setGoal(FitnessGoal.valueOf(request.getGoal().toUpperCase()));

        
        userRepository.save(user);
        
        return ResponseEntity.ok(UserProfileResponse.fromUser(user));
    }
}
