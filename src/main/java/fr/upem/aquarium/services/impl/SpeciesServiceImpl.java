package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.SpeciesRepository;
import fr.upem.aquarium.entities.Species;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.SpeciesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.Optional;
import java.util.logging.Logger;

public class SpeciesServiceImpl implements SpeciesService {
    private Logger logger = Logger.getLogger(SpeciesServiceImpl.class.getName());
    @Autowired
    private SpeciesRepository speciesRepository;

    @Override
    public Species save(Species species) {
        if(speciesRepository.existsById(species.getId()))
            throw new ExistsException( "Species with id " + species.getId()+ " exist!");
        return speciesRepository.save(species);
    }

    @Override
    public Species update(Species species) {
        if(speciesRepository.existsById(species.getId())) {
            logger.info("update success of species with id " + species.getId());
            return speciesRepository.save(species);
        }
        logger.info("species with id " + species.getId() + " is not exist, a new species is created ");
        return speciesRepository.save(species);
    }

    @Override
    public Page<Species> findAll(int page, int size) {
        if(page < 0 || size < 0){
            logger.severe("size of page or size have  negative value");
            throw new ExistsException("error in value of page or size");
        }
        return speciesRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Optional<Species> findById(Long id) {
        if (!speciesRepository.existsById(id)) {
            logger.severe("species with id " + id + " is not exist");
            throw new NotFoundException("species not found in database");
        }
        return speciesRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        if (!speciesRepository.existsById(id)) {
            logger.info("species with id " + id + " is not exist");
            throw new NotFoundException("species with id " + id + " is not exist");
        }
        speciesRepository.deleteById(id);
        logger.info("species with id " + id + " is deleted with success");
    }
}
