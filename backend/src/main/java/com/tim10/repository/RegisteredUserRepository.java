package com.tim10.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tim10.domain.RegisteredUser;

public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Long> {
	
	
	Optional<RegisteredUser> findOneByUsername(String username);
	
	Optional<RegisteredUser> findOneByEmail(String email);
	
	
}
