package fr.upem.aquarium.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

@Component
public class JwtAccessDeniedEntryPoint implements AccessDeniedHandler {

	private static final Logger logger = LoggerFactory.getLogger(JwtAccessDeniedEntryPoint.class);

	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException e) throws IOException, ServletException {
		logger.error("Responding with Access Denied error. Message - {}", e.getMessage());
		response.sendError(HttpServletResponse.SC_FORBIDDEN,
				"Vous n'êtes pas autorisé à accéder à cette ressource !");
		
	}

	

}