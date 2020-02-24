package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Species;

import java.util.List;

public interface SpeciesService {

    public Species save(Species species);

    public Species update(Species species);

    public List<Species> findAll();

    Species findById(Long id);

    void deleteById(Long id);
}
