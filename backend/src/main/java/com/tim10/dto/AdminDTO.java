package com.tim10.dto;

import com.tim10.domain.AirlineAdmin;
import com.tim10.domain.HotelAdmin;
import com.tim10.domain.RentACarAdmin;

public class AdminDTO {

	private Long id;
	private String firstName;
	private String lastName;
	private String username;
	private String email;
	private Boolean hasCustomPassword;
	private String password;

	public AdminDTO() {
		
	}
	
	public AdminDTO(AirlineAdmin airlineAdmin) {
		this.id = airlineAdmin.getId();
		this.firstName = airlineAdmin.getFirstName();
		this.lastName = airlineAdmin.getLastName();
		this.username = airlineAdmin.getUsername();
		this.email = airlineAdmin.getEmail();
		this.hasCustomPassword = airlineAdmin.getHasCustomPassword();
		this.setPassword("");
	}
	
	public AdminDTO(HotelAdmin hotelAdmin) {
		this.id = hotelAdmin.getId();
		this.firstName = hotelAdmin.getFirstName();
		this.lastName = hotelAdmin.getLastName();
		this.username = hotelAdmin.getUsername();
		this.email = hotelAdmin.getEmail();
		this.hasCustomPassword = hotelAdmin.getHasCustomPassword();
		this.setPassword("");
	}
	
	public AdminDTO(RentACarAdmin rentACarAdmin) {
		this.id = rentACarAdmin.getId();
		this.firstName = rentACarAdmin.getFirstName();
		this.lastName = rentACarAdmin.getLastName();
		this.username = rentACarAdmin.getUsername();
		this.email = rentACarAdmin.getEmail();
		this.hasCustomPassword = rentACarAdmin.getHasCustomPassword();
	}

	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public Boolean getHasCustomPassword() {
		return hasCustomPassword;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setHasCustomPassword(Boolean hasCustomPassword) {
		this.hasCustomPassword = hasCustomPassword;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
