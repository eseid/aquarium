package fr.upem.aquarium.exceptions;

import java.time.Instant;

import org.springframework.http.HttpStatus;

public class HttpErrorDetails {

	private Instant instant;
	private HttpStatus status;
	private String message;
	private String details;

	public HttpErrorDetails(Instant instant, HttpStatus status, String message, String details) {
		this.instant = instant;
		this.status = status;
		this.message = message;
		this.details = details;
	}

	public Instant getInstant() {
		return instant;
	}

	public void setInstant(Instant instant) {
		this.instant = instant;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

}