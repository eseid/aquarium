package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.SpeciesRepository;
import fr.upem.aquarium.entities.Species;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.SpeciesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class SpeciesServiceImpl implements SpeciesService {
    private Logger logger = Logger.getLogger(SpeciesServiceImpl.class.getName());
    @Autowired
    private SpeciesRepository speciesRepository;

    @Override
    public Species save(Species species) {
        if(speciesRepository.existsByName(species.getName()))
            throw new ExistsException( "L'espèce " + species.getName()+ " existe déjà !");
        return speciesRepository.save(species);
    }

    @Override
    public Species update(Species species) {
        if(!speciesRepository.existsByName(species.getName())) {
           throw new NotFoundException("L'espèce avec le nom "+ species.getName() + " exist déja !");
        }
        return speciesRepository.save(species);
    }

    @Override
    public List<Species> findAll() {
        return speciesRepository.findAll();
    }

    @Override
    public Species findById(Long id) {
        Optional<Species> speciesOptional = speciesRepository.findById(id);
        if (!speciesOptional.isPresent()) {
            logger.severe("species with id " + id + " is not exist");
            throw new NotFoundException("species not found in database");
        }
        return speciesOptional.get();
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
