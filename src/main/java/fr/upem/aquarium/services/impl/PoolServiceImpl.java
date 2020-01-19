package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.PoolRepository;
import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.services.PoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import java.util.Optional;
import java.util.logging.Logger;

public class PoolServiceImpl implements PoolService {
    private Logger logger = Logger.getLogger(PoolService.class.getName());
    @Autowired
    private PoolRepository poolRepository;

    @Override
    public Pool save(Pool pool) {
        if(poolRepository.existsById(pool.getId()))
            throw new ExistsException( "Pool with id " + pool.getId()+ " exist!");
        return poolRepository.save(pool);
    }

    @Override
    public Pool update(Pool pool) {
        return null;
    }

    @Override
    public Page<Pool> findAll(int page, int size) {
        return null;
    }

    @Override
    public Optional<Pool> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Long id) {

    }
}
