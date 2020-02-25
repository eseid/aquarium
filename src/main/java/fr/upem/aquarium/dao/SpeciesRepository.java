package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.Species;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpeciesRepository extends JpaRepository<Species, Long> {

    Boolean existsByName(String name);
}
