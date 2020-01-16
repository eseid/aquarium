package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.AnimalsRepository;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService {

    @Autowired
    private AnimalsRepository animalsRepository;

    @Override
    public Animal save(Animal animal) {
        if(animalsRepository.existsByName(animal.getName()))
            throw new ExistsException("L'Animal " + animal.getName()+ "existe déjà !");
        return animalsRepository.save(animal);
    }

    @Override
    public Animal update(Animal animal) {
        return null;
    }

    @Override
    public Page<Animal> findAll(int page, int size) {
        return null;
    }

    @Override
    public Optional<Animal> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Long id) {

    }
}
