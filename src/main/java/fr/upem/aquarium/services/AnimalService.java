package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Animal;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface AnimalService {

    public Animal save(Animal animal);

    public Animal update(Animal animal);

    public Page<Animal> findAll(int page, int size);

    Optional<Animal> findById(Long id);

    void deleteById(Long id);


}
