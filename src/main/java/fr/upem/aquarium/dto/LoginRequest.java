package fr.upem.aquarium.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Objects;

public class LoginRequest {

	@NotBlank
	@Size(max = 40)
	@Email
	private String email;

	@NotBlank
	@Size(max = 100)
	private String password;

	public LoginRequest() {
	}

	public LoginRequest(@NotBlank @Size(max = 40) @Email String email, @NotBlank @Size(max = 100) String password) {
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		LoginRequest that = (LoginRequest) o;
		return email.equals(that.email) &&
				password.equals(that.password);
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, password);
	}

	@Override
	public String toString() {
		return "LoginRequest{" +
				"email='" + email + '\'' +
				", password='" + password + '\'' +
				'}';
	}
}
