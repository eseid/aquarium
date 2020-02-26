package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.RoleRepository;
import fr.upem.aquarium.entities.Role;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class RoleServiceImpl implements RoleService {
    private Logger logger = Logger.getLogger(RoleServiceImpl.class.getName());
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Role update(Role role) {
        if(!roleRepository.existsByRoleName()) {
            throw new NotFoundException("Le role " + role.getRoleName() + " existe déjà !");
        }
        return roleRepository.save(role);
    }

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Optional<Role> findById(Long id) {
        if (!roleRepository.existsById(id)) {
            logger.severe("role with id " + id + " is not exist");
            throw new NotFoundException("role not found in database");
        }
        return roleRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        if (!roleRepository.existsById(id)) {
            logger.info("role with id " + id + " is not exist");
            throw new NotFoundException("role with id " + id + " is not exist");
        }
        roleRepository.deleteById(id);
        logger.info("role with id " + id + " is deleted with success");
    }
}
