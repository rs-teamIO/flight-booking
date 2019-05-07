package com.tim10.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.tim10.domain.PriceListItem;
import com.tim10.domain.Room;

public class RoomReservationDTO {
	
	private Date dateFrom;
	private Date dateTo;
	private BigDecimal totalPrice;
	private Set<PriceListItem> additionalServices;
	private List<RoomDTO> listOfRooms;
	private HotelReservationDTO hotelReservationDTO;
	
	public RoomReservationDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RoomReservationDTO(Date dateFrom, Date dateTo, BigDecimal totalPrice, Set<PriceListItem> additionalServices, List<RoomDTO> listOfRooms, HotelReservationDTO hotelReservationDTO) {
		super();
		this.dateFrom = dateFrom;
		this.dateTo = dateTo;
		this.totalPrice = totalPrice;
		this.listOfRooms = listOfRooms;
		this.hotelReservationDTO = hotelReservationDTO;
		this.additionalServices = additionalServices;
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

	public List<RoomDTO> getListOfRooms() {
		return listOfRooms;
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

	public void setListOfRooms(List<RoomDTO> listOfRooms) {
		this.listOfRooms = listOfRooms;
	}

	public HotelReservationDTO getHotelReservationDTO() {
		return hotelReservationDTO;
	}

	public void setHotelReservationDTO(HotelReservationDTO hotelReservationDTO) {
		this.hotelReservationDTO = hotelReservationDTO;
	}

	public Set<PriceListItem> getAdditionalServices() {
		return additionalServices;
	}

	public void setAdditionalServices(Set<PriceListItem> additionalServices) {
		this.additionalServices = additionalServices;
	}

	
	
	
}
