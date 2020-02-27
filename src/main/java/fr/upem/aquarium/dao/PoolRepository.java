package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.Sector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoolRepository extends JpaRepository<Pool, Long> {

    boolean existsByName(String name);
}
