package com.tim10.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tim10.domain.RentACar;
import com.tim10.service.RentACarServiceService;


@RestController
public class RentACarServiceController {

	private RentACarServiceService rcsService;
	
	@RequestMapping(
			value = "/api/updateRcs",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RentACar> updateCar(@RequestBody RentACar rentACarService) throws Exception {
		RentACar updatedRcs = rcsService.update(rentACarService);
		if (updatedRcs == null)
			return new ResponseEntity<RentACar>(HttpStatus.INTERNAL_SERVER_ERROR);
		return new ResponseEntity<RentACar>(updatedRcs, HttpStatus.OK);
	}
	


	
	
	
}
