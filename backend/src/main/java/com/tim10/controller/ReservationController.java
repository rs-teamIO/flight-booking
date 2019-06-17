package com.tim10.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tim10.domain.RoomReservation;
import com.tim10.domain.RoomType;
import com.tim10.dto.FlightReservationDTO;
import com.tim10.dto.RoomReservationDTO;
import com.tim10.dto.RoomTypesDTO;
import com.tim10.service.ReservationService;
import com.tim10.service.RoomReservationService;
import com.tim10.service.RoomService;

@RestController
@RequestMapping(value="/api/reservations")
public class ReservationController {
	
	@Autowired
	ReservationService reservationService;
	
	/**
	 * @author fivkovic
	 */
	@RequestMapping(
			value = "/reserveFlight",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> reserveFlight(@RequestBody FlightReservationDTO flightReservationDTO) {
		
		Long reservationId = reservationService.reserveFlight(flightReservationDTO);
		
		if(reservationId != null)
			return new ResponseEntity<>(reservationId, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	/**
	 * @author fivkovic
	 */
	@RequestMapping(
			value = "/sendEmails/{id}",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> sendEmails(@PathVariable("id") Long groupReservationId) {
		
		boolean success = reservationService.sendEmails(groupReservationId);
		
		if(success)
			return new ResponseEntity<>(HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}


	@Autowired
	private RoomReservationService roomReservationService;

	@Autowired
	private RoomService roomService;

	/*
	 * Rezervisanje sobe/soba
	 */
//	@RequestMapping(value = "/reserveRoom", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<?> reserveRooms(@RequestBody RoomReservationDTO reservationDTO) {
//
//		for (RoomDTO roomDTO : reservationDTO.getListOfRooms()) {
//			Room room = roomService.getRoom(roomDTO.getId()).get();
//			RoomReservation roomReservation = new RoomReservation(reservationDTO.getDateFrom(),
//					reservationDTO.getDateTo(), reservationDTO.getTotalPrice(), reservationDTO.getAdditionalServices(),
//					room);
//			roomReservationService.save(roomReservation);
//		}
//		return new ResponseEntity<>(HttpStatus.OK);
//	}
	
	@RequestMapping(value = "/reserveRoom/{dateFrom}/{dateTo}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> reserveRooms(@RequestBody RoomReservationDTO reservationDTO,
											@PathVariable("dateFrom") String dateFrom,
											@PathVariable("dateTo") String dateTo) throws ParseException {
		try{
			roomReservationService.reserveRooms(reservationDTO, dateFrom, dateTo);
		}catch(Exception ex) {
			return new ResponseEntity<>(ex.getMessage(), HttpStatus.FORBIDDEN);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
}
