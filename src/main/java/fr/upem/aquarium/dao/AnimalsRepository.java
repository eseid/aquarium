package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface AnimalsRepository extends JpaRepository<Animal, Long> {

    Boolean existsByName(String name);

    Set<Animal> findAllByPoolId(Long poolId);
}