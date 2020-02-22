package fr.upem.aquarium.services;

import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.Role;

import java.util.List;
import java.util.Optional;

public interface RoleService {

    public Role save(Role role);

    public Role update(Role role);

    public List<Role> findAll();

    Optional<Role> findById(Long id);

    void deleteById(Long id);
}
