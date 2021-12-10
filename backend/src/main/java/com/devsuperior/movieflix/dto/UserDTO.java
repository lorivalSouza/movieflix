package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.Role;
import com.devsuperior.movieflix.entities.User;

public class UserDTO implements Serializable{
	private static final long serialVersionUID = 1L;
		
	private Long id;
		
	private String email;
	private String name;
		
	private Set<Role> roles = new HashSet<>();
		
	private List<Review> reviews = new ArrayList<>();

	public UserDTO() {
	}

	public UserDTO(Long id, String email, String name) {
		this.id = id;
		this.email = email;
		this.name = name;
	}
	
	public UserDTO(User entity) {
		id = entity.getId();
		email = entity.getEmail();
		name = entity.getName();
		roles = entity.getRoles();
		reviews = entity.getReviews();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Role> getRoles() {
		return roles;
	}
	
}
