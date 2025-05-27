package com.example.loginapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginapp.dto.UserProfileResponse;
import com.example.loginapp.dto.UserProfileUpdateRequest;
import com.example.loginapp.service.UserService;


@RestController
@RequestMapping("/api/user")
@PreAuthorize("hasRole('USER')") // Asegura que sea un usuario autenticado
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponse> getUserProfile() {
        return ResponseEntity.ok(userService.getUserProfile());
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateUserProfile(@RequestBody UserProfileUpdateRequest request) {
        userService.updateUserProfile(request);
        return ResponseEntity.ok("Perfil actualizado correctamente");
    }
}


