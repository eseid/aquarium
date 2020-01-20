package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Personnal;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface PersonnalService {
    public Personnal save(Personnal personnal);

    public Personnal update(Personnal personnal);

    public Page<Personnal> findAll(int page, int size);

    Optional<Personnal> findById(Long id);

    void deleteById(Long id);
}
