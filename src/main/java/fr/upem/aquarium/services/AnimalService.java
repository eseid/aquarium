package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Animal;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface AnimalService {

    public Animal save(Animal animal);

    public Animal update(Animal animal);

    public List<Animal> findAll();

    Optional<Animal> findById(Long id);

    void deleteById(Long id);


}
