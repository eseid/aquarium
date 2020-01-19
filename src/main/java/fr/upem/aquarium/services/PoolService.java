package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Pool;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface PoolService {

    public Pool save(Pool pool);

    public Pool update(Pool pool);

    public Page<Pool> findAll(int page, int size);

    Optional<Pool> findById(Long id);

    void deleteById(Long id);
}
