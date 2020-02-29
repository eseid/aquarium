package fr.upem.aquarium.dto;

import fr.upem.aquarium.entities.Personnal;

import java.util.Objects;

public class AuthenticationResponse {

	private Personnal currentUser;
	private String accessToken;
	private String tokenType = "Bearer";

	public AuthenticationResponse() {}

	public AuthenticationResponse(String accessToken, Personnal currentUser) {
		this.accessToken = accessToken;
		this.currentUser = currentUser;
	}

	public Personnal getCurrentUser() {
		return currentUser;
	}

	public void setCurrentUser(Personnal currentUser) {
		this.currentUser = currentUser;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		AuthenticationResponse that = (AuthenticationResponse) o;
		return accessToken.equals(that.accessToken) &&
				tokenType.equals(that.tokenType);
	}

	@Override
	public int hashCode() {
		return Objects.hash(accessToken, tokenType);
	}

	@Override
	public String toString() {
		return "AuthenticationResponse{" +
				"currentUser=" + currentUser +
				", accessToken='" + accessToken + '\'' +
				", tokenType='" + tokenType + '\'' +
				'}';
	}
}