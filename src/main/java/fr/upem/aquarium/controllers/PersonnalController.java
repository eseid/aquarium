package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.services.PersonnalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personals")
public class PersonnalController {
    @Autowired
    private PersonnalService personnalService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Personnal> save(@RequestBody Personnal personnal) {
        return new ResponseEntity<>(personnalService.save(personnal), HttpStatus.CREATED);
    }

    @PutMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Personnal> update(@RequestBody  Personnal personnal) {
        Personnal savedPool = personnalService.update(personnal);
        return new ResponseEntity<Personnal>(savedPool, HttpStatus.OK);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Personnal>> findAll() {
        return new ResponseEntity<>(personnalService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Personnal> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Personnal>(personnalService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
