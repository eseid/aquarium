package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.SectorRepository;
import fr.upem.aquarium.entities.Sector;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.SectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class SectorServiceImpl implements SectorService {
    private Logger logger = Logger.getLogger(SectorServiceImpl.class.getName());
    @Autowired
    private SectorRepository sectorRepository;

    @Override
    public Sector save(Sector sector) {
        if(sectorRepository.existsByName(sector.getName()))
            throw new ExistsException( "The Sector " + sector.getName()+ " exist!");
        return sectorRepository.save(sector);
    }

    @Override
    public Sector update(Sector sector) {
        if(!sectorRepository.existsById(sector.getId())) {
            throw new NotFoundException("The sector with id " + sector.getId() + " not exist !");
        }
        return sectorRepository.save(sector);
    }

    @Override
    public List<Sector> findAll() {
        return sectorRepository.findAll();
    }

    @Override
    public Optional<Sector> findById(Long id) {
        if (!sectorRepository.existsById(id)) {
            logger.severe("sector with id " + id + " is not exist");
            throw new NotFoundException("sector not found in database");
        }
        return sectorRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        if (!sectorRepository.existsById(id)) {
            logger.info("sector with id " + id + " is not exist");
            throw new NotFoundException("sector with id " + id + " is not exist");
        }
        sectorRepository.deleteById(id);
        logger.info("sector with id " + id + " is deleted with success");
    }
}
