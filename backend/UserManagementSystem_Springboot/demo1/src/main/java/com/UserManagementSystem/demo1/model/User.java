package com.UserManagementSystem.demo1.model;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String location;
    private String role;


    public Long getId() {

        return id;
    }
    public void setId(Long id) {

        this.id = id;
    }
    public String getName() {

        return name;
    }
    public void setName(String name) {

        this.name = name;
    }
    public String getEmail() {

        return email;
    }
    public void setEmail(String email) {

        this.email = email;
    }
    public String getLocation() {

        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public String getRole() {

        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
