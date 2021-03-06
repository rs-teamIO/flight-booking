package com.tim10.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tim10.dto.NewRentACarDTO;

@Entity
@Table(name="RentACar")
public class RentACar extends Company {
	
	private static final long serialVersionUID = 1L;

	@OneToMany(mappedBy="mainOffice", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private Set<BranchOffice> branchOffices;
	
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private Set<RentACarAdmin> administrators;
	
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private Set<QuickVehicleReservation> quickVehicleReservations;
	
	@OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	public PriceList additionalServicesPriceList;

	public RentACar() {
		branchOffices = new HashSet<BranchOffice>();
		additionalServicesPriceList = new PriceList();
		quickVehicleReservations = new HashSet<QuickVehicleReservation>();
		administrators = new HashSet<RentACarAdmin>();
		additionalServicesPriceList = new PriceList();
	}
	
	public RentACar(NewRentACarDTO dto) {
		branchOffices = new HashSet<BranchOffice>();
		additionalServicesPriceList = new PriceList();
		quickVehicleReservations = new HashSet<QuickVehicleReservation>();
		this.setName(dto.getName());
		this.setLocation(dto.getLocation());
		Set<RentACarAdmin> tempAdm = dto.getAdministrators();
		HashSet<RentACarAdmin> admins = new HashSet<RentACarAdmin>();
		for(RentACarAdmin rca : tempAdm) {
			Set<Authority> autoriteti = new HashSet<Authority>();
			autoriteti.add(new Authority(Role.ROLE_RENT_A_CAR_ADMIN));
			rca.setAuthorities(autoriteti);
			admins.add(rca);
		}
		this.setAdministrators(admins);
	}

	public Set<BranchOffice> getBranchOffices() {
		return branchOffices;
	}

	public Set<RentACarAdmin> getAdministrators() {
		return administrators;
	}

	public Set<QuickVehicleReservation> getQuickVehicleReservations() {
		return quickVehicleReservations;
	}

	public PriceList getAdditionalServicesPriceList() {
		return additionalServicesPriceList;
	}

	public void setBranchOffices(Set<BranchOffice> branchOffices) {
		this.branchOffices = branchOffices;
	}

	public void setAdministrators(Set<RentACarAdmin> administrators) {
		this.administrators = administrators;
	}

	public void setQuickVehicleReservations(Set<QuickVehicleReservation> quickVehicleReservations) {
		this.quickVehicleReservations = quickVehicleReservations;
	}

	public void setAdditionalServicesPriceList(PriceList additionalServicesPriceList) {
		this.additionalServicesPriceList = additionalServicesPriceList;
	}
}