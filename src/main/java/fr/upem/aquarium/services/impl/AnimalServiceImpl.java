package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.AnimalsRepository;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class AnimalServiceImpl implements AnimalService {

    Logger logger = Logger.getLogger(AnimalServiceImpl.class.getName());

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
        if(!animalsRepository.existsByName(animal.getName())){
            logger.info("new animal is add");
            return animalsRepository.save(animal);
        }
        logger.info("update animal is done with success");
        return animalsRepository.save(animal);
    }

    @Override
    public Page<Animal> findAll(int page, int size) {
        if(page < 0 || size < 0)
            throw new ExistsException("page and size should be superior to zero");
        Pageable pageable = PageRequest.of(page, size);
        return animalsRepository.findAll(pageable);
    }

    @Override
    public Optional<Animal> findById(Long id) {
        Optional<Animal> animal = animalsRepository.findById(id);
        if(!animal.isPresent()){
            logger.info("the animal with id " + id + " is not exist ");
            throw new NotFoundException("the animal with id " + id + " is not exist ");
        }
        logger.info("the animal with id " + id + " id found with success ");
        return animal;
    }

    @Override
    public void deleteById(Long id) {
        if (!animalsRepository.existsById(id)) {
            logger.info("L'animal avec l'ID = {} n'existe pas");
            throw new NotFoundException("La Commande avec l'ID " + id + " n'existe pas !");
        }
        animalsRepository.deleteById(id);
        logger.info("L'animal avec l'ID = {} a été supprimée avec succès");
    }
}
