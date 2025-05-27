package com.example.loginapp.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.loginapp.dto.UserProfileResponse;
import com.example.loginapp.dto.UserProfileUpdateRequest;
import com.example.loginapp.model.User;
import com.example.loginapp.repository.UserRepository;

@Service
public class UserService {
    
    private  UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public UserProfileResponse getUserProfile() {
        User user = getCurrentUser();
        return UserProfileResponse.fromUser(user);
    }
    public void updateUserProfile(UserProfileUpdateRequest request) {
        User user = getCurrentUser();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setCountry(request.getCountry());
        user.setWeight(request.getWeight());    
        user.setAge(request.getAge());  
        user.setHeight(request.getHeight());    

        userRepository.save(user);
    }
}
