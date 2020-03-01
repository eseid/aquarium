package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.PersonnalRepository;
import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.InitDatabase;
import fr.upem.aquarium.services.PersonnalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class PersonnalServiceImpl implements PersonnalService {

    private Logger logger = Logger.getLogger(PersonnalServiceImpl.class.getName());

    @Autowired
    private PersonnalRepository personnalRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public Personnal save(Personnal personnal) {
        if(personnalRepository.existsBySocialSecurityNumber(personnal.getSocialSecurityNumber()))
            throw new ExistsException( "The personal with social security number : " + personnal.getSocialSecurityNumber() + " exist ");
        personnal.setPassword(passwordEncoder.encode(personnal.getPassword()));
        return personnalRepository.save(personnal);
    }

    @Override
    public Personnal update(Personnal personnal) {
        if(!personnalRepository.existsById(personnal.getId())) {
            throw new NotFoundException("The personal with id " + personnal.getId() + " not exist !");
        }
        personnal.setPassword(passwordEncoder.encode(personnal.getPassword()));
        return personnalRepository.save(personnal);
    }

    @Override
    public List<Personnal> findAll() {
        return personnalRepository.findAll();
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

    @Override
    public Personnal findByEmail(String email) {
        Optional<Personnal> personnalOptional = personnalRepository.findByEmail(email);
        if(!personnalOptional.isPresent())
            throw  new NotFoundException("Le personnel avec l'email " + email+ " est introuvable");
        return personnalOptional.get();
    }

}
