package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Species;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface SpeciesService {
    public Species save(Species species);

    public Species update(Species species);

    public Page<Species> findAll(int page, int size);

    Optional<Species> findById(Long id);

    void deleteById(Long id);
}
