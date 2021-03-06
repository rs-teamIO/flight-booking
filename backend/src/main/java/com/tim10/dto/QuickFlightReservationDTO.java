package com.tim10.dto;

import java.math.BigDecimal;

import com.tim10.domain.QuickFlightReservation;

public class QuickFlightReservationDTO {
	
	private Long id;
	private Long seatId;
	private String seatNumber;
	private Double discount;
	
	private String flightNumber;
	private String departure;
	private String destination;
	private String date;
	private BigDecimal originalPrice;
	
	public QuickFlightReservationDTO() {
		super();
	}
	
	public QuickFlightReservationDTO(QuickFlightReservation item) {
		this.setId(item.getId());
		this.setSeatId(item.getSeat().getId());
		this.setSeatNumber(item.getSeat().getRed().toString() + (char)(item.getSeat().getKolona() + 64));
		this.setDiscount(item.getDiscount());
		
		this.setFlightNumber(item.getSeat().getFlight().getFlightNumber());
		this.setDeparture(item.getSeat().getFlight().getDeparture().getName());
		this.setDestination(item.getSeat().getFlight().getDestination().getName());
		this.setDate(item.getSeat().getFlight().getDepartureDate().toString());
		this.setOriginalPrice(item.getSeat().getFlight().getTicketPrice());
	}

	public Long getId() {
		return id;
	}

	public Long getSeatId() {
		return seatId;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setSeatId(Long seatId) {
		this.seatId = seatId;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public String getDeparture() {
		return departure;
	}

	public String getDestination() {
		return destination;
	}

	public String getDate() {
		return date;
	}

	public BigDecimal getOriginalPrice() {
		return originalPrice;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public void setDeparture(String departure) {
		this.departure = departure;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setOriginalPrice(BigDecimal originalPrice) {
		this.originalPrice = originalPrice;
	}

	public String getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}
}
