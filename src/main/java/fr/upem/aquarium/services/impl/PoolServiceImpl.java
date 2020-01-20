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

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class PoolServiceImpl implements PoolService {
    private Logger logger = Logger.getLogger(PoolService.class.getName());
    @Autowired
    private PoolRepository sectorRepository;

    @Override
    public Pool save(Pool pool) {
        if(sectorRepository.existsById(pool.getId()))
            throw new ExistsException( "Pool with id " + pool.getId()+ " exist!");
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
    public Page<Pool> findAll(int page, int size) {
        if(page < 0 || size < 0){
            logger.severe("size of page or size have  negative value");
            throw new ExistsException("error in value of page or size");
        }
        return sectorRepository.findAll(PageRequest.of(page, size));
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
