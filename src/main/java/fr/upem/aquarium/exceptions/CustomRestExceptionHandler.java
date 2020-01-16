package fr.upem.aquarium.exceptions;

import java.time.Instant;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomRestExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.BAD_REQUEST,
				ex.getLocalizedMessage(), request.getDescription(false));
		return handleExceptionInternal(ex, httpErrorDetails, headers, httpErrorDetails.getStatus(), request);
	}

	@Override
	protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String error = "Le paramètre " + ex.getParameterName() + " est oublié";
		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.BAD_REQUEST, error,
				request.getDescription(false));
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@Override
	protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		StringBuilder builder = new StringBuilder();
		builder.append(ex.getMethod());
		builder.append(" méthode non supportée pour cette requête. Les méthodes supportées sont ");
		ex.getSupportedHttpMethods().forEach(t -> builder.append(t + " "));

		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.METHOD_NOT_ALLOWED,
				ex.getLocalizedMessage(), builder.toString());
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@Override
	protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		StringBuilder builder = new StringBuilder();
		builder.append(ex.getContentType());
		builder.append(" Ce type de média n'est pas supporté. Les types de média supportés sont ");
		ex.getSupportedMediaTypes().forEach(t -> builder.append(t + ", "));

		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.UNSUPPORTED_MEDIA_TYPE,
				ex.getLocalizedMessage(), builder.substring(0, builder.length() - 2));
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@ExceptionHandler({ ConstraintViolationException.class })
	public ResponseEntity<Object> handleConstraintViolation(ConstraintViolationException ex, WebRequest request) {

		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.BAD_REQUEST,
				ex.getLocalizedMessage(), request.getDescription(false));
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@ExceptionHandler({ MethodArgumentTypeMismatchException.class })
	public ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex,
			WebRequest request) {
		String error = ex.getName() + " doit être de type " + ex.getRequiredType().getName();

		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.UNSUPPORTED_MEDIA_TYPE,
				error, request.getDescription(false));
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@ExceptionHandler({ NotFoundException.class })
	public ResponseEntity<Object> handleNotFoundException(NotFoundException ex, WebRequest request) {
		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.NOT_FOUND, ex.getMessage(),
				request.getDescription(false));
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@ExceptionHandler({ ExistsException.class })
	public ResponseEntity<Object> handleExistsException(ExistsException ex, WebRequest request) {
		HttpErrorDetails httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.BAD_REQUEST, ex.getMessage(),
				request.getDescription(false));
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

	@ExceptionHandler({ Exception.class })
	public ResponseEntity<Object> handleAll(Exception ex, WebRequest request) {
		HttpErrorDetails httpErrorDetails = null;
		if(ex.getMessage().contains("Accès refusé") || ex.getMessage().contains("Access denied"))
			httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.FORBIDDEN,
					"Vous n'êtes pas autorisé à accèder à cette ressource!",ex.getLocalizedMessage());
		else
			httpErrorDetails = new HttpErrorDetails(Instant.now(), HttpStatus.INTERNAL_SERVER_ERROR,
					ex.getLocalizedMessage(), "Erreur est survenue!");
		return new ResponseEntity<Object>(httpErrorDetails, new HttpHeaders(), httpErrorDetails.getStatus());
	}

}