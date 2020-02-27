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
    private PoolRepository poolRepository;

    @Override
    public Pool save(Pool pool) {
        if(poolRepository.existsByName(pool.getName()))
            throw new ExistsException( "The pool with name : " + pool.getName()+ " exist !");
        return poolRepository.save(pool);
    }

    @Override
    public Pool update(Pool pool) {
        if(!poolRepository.existsById(pool.getId()))
            throw new ExistsException( "The pool with id" + pool.getId()+ " not exist !");
        return poolRepository.save(pool);
    }

    @Override
    public List<Pool> findAll() {
        return poolRepository.findAll();
    }

    @Override
    public Optional<Pool> findById(Long id) {
        if (!poolRepository.existsById(id)) {
            logger.severe("pool with id " + id + " is not exist");
            throw new NotFoundException("pool not found in database");
        }
        return poolRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        if (!poolRepository.existsById(id)) {
            logger.info("pool with id " + id + " is not exist");
            throw new NotFoundException("pool with id " + id + " is not exist");
        }
        poolRepository.deleteById(id);
        logger.info("pool with id " + id + " is deleted with success");
    }
}
