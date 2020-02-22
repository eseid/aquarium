package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.PoolRepository;
import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.PoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Logger;

@Service
public class PoolServiceImpl implements PoolService {
    private Logger logger = Logger.getLogger(PoolService.class.getName());
    @Autowired
    private PoolRepository sectorRepository;

    @Override
    public Pool save(Pool pool) {
        return sectorRepository.save(pool);
    }

    @Override
    public Pool update(Pool pool) {
        if(sectorRepository.existsById(pool.getId())) {
            logger.info("update success of pool with id " + pool.getId());
            return sectorRepository.save(pool);
        }
        logger.info("pool with id " + pool.getId() + " is not exist, a new pool is created ");
        return sectorRepository.save(pool);
    }

    @Override
    public List<Pool> findAll() {
        return sectorRepository.findAll();
    }

    @Override
    public Optional<Pool> findById(Long id) {
        if (!sectorRepository.existsById(id)) {
            logger.severe("pool with id " + id + " is not exist");
            throw new NotFoundException("pool not found in database");
        }
        return sectorRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        if (!sectorRepository.existsById(id)) {
            logger.info("pool with id " + id + " is not exist");
            throw new NotFoundException("pool with id " + id + " is not exist");
        }
        sectorRepository.deleteById(id);
        logger.info("pool with id " + id + " is deleted with success");
    }
}
