package fr.upem.aquarium.security;

import javax.transaction.Transactional;

import fr.upem.aquarium.dao.PersonnalRepository;
import fr.upem.aquarium.entities.Personnal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private PersonnalRepository personnalRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Personnal user = personnalRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Utilisateur introuvable avec l'email : " + email));
		return UserPrincipal.create(user);
	}

	// This method is used by JWTAuthenticationFilter
	@Transactional
	public UserDetails loadUserById(Long id) {
		Personnal user = personnalRepository.findById(id)
				.orElseThrow(() -> new UsernameNotFoundException("Utilisateur introuvable avec l'id : " + id));
		return UserPrincipal.create(user);
	}

}
