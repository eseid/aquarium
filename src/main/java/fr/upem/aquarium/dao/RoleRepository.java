package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository  extends JpaRepository<Role, Long> {
}
