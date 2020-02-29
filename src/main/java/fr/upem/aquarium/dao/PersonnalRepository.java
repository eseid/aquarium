package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Personnal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonnalRepository extends JpaRepository<Personnal, Long> {

    Boolean existsBySocialSecurityNumber(String socialSecurityNumber);

    Optional<Personnal> findByEmail(String email);
}
