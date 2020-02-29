package fr.upem.aquarium.controllers;

import fr.upem.aquarium.dto.AuthenticationResponse;
import fr.upem.aquarium.dto.LoginRequest;
import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.exceptions.LoginException;
import fr.upem.aquarium.security.JwtTokenProvider;
import fr.upem.aquarium.services.PersonnalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/account")
public class AccountController {

	@Autowired
	private PersonnalService personnalService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtTokenProvider tokenProvider;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = tokenProvider.generateToken(authentication);
		if (jwt == null) {
			throw new LoginException("Erreur d'authentifciation, Merci de vérifier votre login et mot de passe");
		}
		Personnal currentUser = this.personnalService.findByEmail(loginRequest.getEmail());
		return ResponseEntity.ok(new AuthenticationResponse(jwt, currentUser));

	}

}