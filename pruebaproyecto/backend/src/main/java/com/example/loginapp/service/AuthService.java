package com.example.loginapp.service;


import java.util.Collections;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.loginapp.dto.AuthResponse;
import com.example.loginapp.dto.LoginRequest;
import com.example.loginapp.dto.RegisterRequest;
import com.example.loginapp.enums.FitnessGoal;
import com.example.loginapp.enums.Gender;
import com.example.loginapp.repository.RoleRepository;
import com.example.loginapp.repository.UserRepository;
import com.example.loginapp.security.JwtService;
import com.example.loginapp.model.Role;
import com.example.loginapp.model.User;

import lombok.RequiredArgsConstructor;
import lombok.var;
import java.util.Arrays;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request){
        Role userRole = roleRepository.findByName("ROLE_USER")
            .orElseThrow(() -> new RuntimeException("Role not found"));

        // SOLO si gender y goal NO son nulos:
        Gender gender = null;
        if (request.getGender() != null) {
        gender = Arrays.stream(Gender.values())
                .filter(g -> g.name().equalsIgnoreCase(request.getGender()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid gender"));
        }

        FitnessGoal goal = null;
        if (request.getGoal() != null) {
        goal = Arrays.stream(FitnessGoal.values())
                .filter(g -> g.name().equalsIgnoreCase(request.getGoal()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid fitness goal"));
        }


        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .weight(request.getWeight()) // puede ser null
                .age(request.getAge())
                .country(request.getCountry())
                .height(request.getHeight())
                .gender(gender)
                .goal(goal)
                .roles(Collections.singleton(userRole))
                .build();


        userRepository.save(user);
        
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
     public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        
        String jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
}