package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.entities.Sector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectorRepository extends JpaRepository<Sector, Long> {
}
