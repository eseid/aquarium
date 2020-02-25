package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Sector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectorRepository extends JpaRepository<Sector, Long> {
    Boolean existsByName(String name);
}
