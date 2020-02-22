package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Personnal;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface PersonnalService {
    public Personnal save(Personnal personnal);

    public Personnal update(Personnal personnal);

    public List<Personnal> findAll();

    Optional<Personnal> findById(Long id);

    void deleteById(Long id);
}
