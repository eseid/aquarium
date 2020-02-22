package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Pool;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface PoolService {

    public Pool save(Pool pool);

    public Pool update(Pool pool);

    public List<Pool> findAll();

    Optional<Pool> findById(Long id);

    void deleteById(Long id);
}
