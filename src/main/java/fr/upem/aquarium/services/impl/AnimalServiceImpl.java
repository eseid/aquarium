package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.AnimalsRepository;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Logger;

@Service
public class AnimalServiceImpl implements AnimalService {

    Logger logger = Logger.getLogger(AnimalServiceImpl.class.getName());

    @Autowired
    private AnimalsRepository animalsRepository;

    @Override
    public Animal save(Animal animal) {
        if(animalsRepository.existsByName(animal.getName()))
            throw new ExistsException( "The animal with name : " + animal.getName()+ " exist ! ");
        return animalsRepository.save(animal);
    }

    @Override
    public Animal update(Animal animal) {
        if(!animalsRepository.existsById(animal.getId()))
            throw new ExistsException( "The animal with id : " + animal.getId()+ " not exist !");
        return animalsRepository.save(animal);
    }

    @Override
    public List<Animal> findAll() {
        return animalsRepository.findAll();
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
            throw new NotFoundException("La animal avec l'ID " + id + " n'existe pas !");
        }
        animalsRepository.deleteById(id);
        logger.info("L'animal avec l'ID = {} a été supprimée avec succès");
    }

    @Override
    public Set<Animal> findAllByPoolId(Long poolId) {
        logger.info("Récupération de la liste des animaux du pool avc  l'ID = " + poolId);
        Set<Animal> animalsList = this.animalsRepository.findAllByPoolId(poolId);
        logger.info("La liste de animaux recupérée + " + animalsList);
        return animalsList;
    }
}