package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalsRepository extends PagingAndSortingRepository<Animal, Long> {

    Boolean existsByName(String name);
}
