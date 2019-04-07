package com.tim10.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
public class RentACarAdmin extends User {

	@Column(name="hasCustomPassword", nullable=false)
	private Boolean hasCustomPassword;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private RentACar company;

	public RentACarAdmin() {
		super();
	}

	public Boolean getHasCustomPassword() {
		return hasCustomPassword;
	}

	public RentACar getCompany() {
		return company;
	}

	public void setHasCustomPassword(Boolean hasCustomPassword) {
		this.hasCustomPassword = hasCustomPassword;
	}

	public void setCompany(RentACar company) {
		this.company = company;
	}
}