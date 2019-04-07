package com.tim10.domain;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name="VehicleReservations")
public class VehicleReservation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(name="dateFrom")
	private Date dateFrom;
	
	@Column(name="dateTo")
	private Date dateTo;
	
	@Column(name="totalPrice")
	private BigDecimal totalPrice;
	
	@OneToMany(fetch=FetchType.LAZY)
	private Set<PriceListItem> additionalServices;
	
	//DA LI JE POTREBNA REFERENCA NA REZERVACIJU???????
	//private Reservation reservation;
	
	@OneToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private Review review;
	
	@ManyToOne(fetch=FetchType.LAZY)
	private Vehicle reservedVehicle;

	public VehicleReservation() {
		super();
	}

	public Long getId() {
		return id;
	}

	public Date getDateFrom() {
		return dateFrom;
	}

	public Date getDateTo() {
		return dateTo;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public Set<PriceListItem> getAdditionalServices() {
		return additionalServices;
	}

//	public Reservation getReservation() {
//		return reservation;
//	}

	public Review getReview() {
		return review;
	}

	public Vehicle getReservedVehicle() {
		return reservedVehicle;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}

	public void setDateTo(Date dateTo) {
		this.dateTo = dateTo;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}

	public void setAdditionalServices(Set<PriceListItem> additionalServices) {
		this.additionalServices = additionalServices;
	}

//	public void setReservation(Reservation reservation) {
//		this.reservation = reservation;
//	}

	public void setReview(Review review) {
		this.review = review;
	}

	public void setReservedVehicle(Vehicle reservedVehicle) {
		this.reservedVehicle = reservedVehicle;
	}

}