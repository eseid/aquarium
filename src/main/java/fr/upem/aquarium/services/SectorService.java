package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Sector;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface SectorService  {
    public Sector save(Sector sector);

    public Sector update(Sector sector);

    public List<Sector> findAll();

    Optional<Sector> findById(Long id);

    void deleteById(Long id);
}
