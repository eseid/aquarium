package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Activity;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface ActivityService {
    public Activity save(Activity activity);

    public Activity update(Activity activity);

    public Page<Activity> findAll(int page, int size);

    Optional<Activity> findById(Long id);

    void deleteById(Long id);

}
