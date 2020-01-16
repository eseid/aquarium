package fr.upem.aquarium.exceptions;

public class ExistsException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ExistsException(String msg) {
		super(msg);
	}

}