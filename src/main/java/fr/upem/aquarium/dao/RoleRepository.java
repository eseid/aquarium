package fr.upem.aquarium.dao;

import fr.upem.aquarium.entities.Role;
import fr.upem.aquarium.entities.enumeration.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository  extends JpaRepository<Role, Long> {
    Boolean existsByRoleName(RoleName roleName);

}
