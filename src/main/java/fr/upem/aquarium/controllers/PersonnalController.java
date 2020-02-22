package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.services.PersonnalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personals")
public class PersonnalController {
    @Autowired
    private PersonnalService personnalService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    public ResponseEntity<Personnal> save(@RequestBody Personnal personnal) {
        return new ResponseEntity<>(personnalService.save(personnal), HttpStatus.CREATED);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    public ResponseEntity<List<Personnal>> findAll() {
        return new ResponseEntity<>(personnalService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Personnal> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Personnal>(personnalService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
