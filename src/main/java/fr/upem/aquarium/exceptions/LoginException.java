package fr.upem.aquarium.exceptions;

public class LoginException extends RuntimeException {

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	public LoginException(String msg) {
		super(msg);
	}

}