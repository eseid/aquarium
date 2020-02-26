package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.entities.Role;
import fr.upem.aquarium.services.AnimalService;
import fr.upem.aquarium.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;
    

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    public ResponseEntity<Role> save(@RequestBody Role role) {
        return new ResponseEntity<>(roleService.save(role), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Role> update(@RequestBody Role role) {
        return new ResponseEntity<>(roleService.update(role), HttpStatus.CREATED);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    public ResponseEntity<List<Role>> findAll() {
        return new ResponseEntity<>(roleService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Role> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Role>(roleService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        return new ResponseEntity<Void>(HttpStatus.OK);
    }


}