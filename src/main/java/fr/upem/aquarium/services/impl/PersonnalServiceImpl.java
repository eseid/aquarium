package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.PersonnalRepository;
import fr.upem.aquarium.dao.PoolRepository;
import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.PersonnalService;
import fr.upem.aquarium.services.PoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class PersonnalServiceImpl implements PersonnalService {
    private Logger logger = Logger.getLogger(PersonnalServiceImpl.class.getName());
    @Autowired
    private PersonnalRepository personnalRepository;

    @Override
    public Personnal save(Personnal personnal) {
        if(personnalRepository.existsById(personnal.getId()))
            throw new ExistsException( "Personnal with id " + personnal.getId()+ " exist!");
        return personnalRepository.save(personnal);
    }

    @Override
    public Personnal update(Personnal personnal) {
        if(personnalRepository.existsById(personnal.getId())) {
            logger.info("update success of personnal with id " + personnal.getId());
            return personnalRepository.save(personnal);
        }
        logger.info("personnal with id " + personnal.getId() + " is not exist, a new personnal is created ");
        return personnalRepository.save(personnal);
    }

    @Override
    public Page<Personnal> findAll(int page, int size) {
        if(page < 0 || size < 0){
            logger.severe("size of page or size have  negative value");
            throw new ExistsException("error in value of page or size");
        }
        return personnalRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Optional<Personnal> findById(Long id) {
        if (!personnalRepository.existsById(id)) {
            logger.severe("personnal with id " + id + " is not exist");
            throw new NotFoundException("personnal not found in database");
        }
        return personnalRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        if (!personnalRepository.existsById(id)) {
            logger.info("personnal with id " + id + " is not exist");
            throw new NotFoundException("personnal with id " + id + " is not exist");
        }
        personnalRepository.deleteById(id);
        logger.info("personnal with id " + id + " is deleted with success");
    }

}
