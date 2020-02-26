package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Species;
import fr.upem.aquarium.services.SpeciesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/species")
public class SpeciesController {

    @Autowired
    private SpeciesService speciesService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    public ResponseEntity<Species> save(@RequestBody Species species) {
        return new ResponseEntity<>(speciesService.save(species), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Species> update(@RequestBody Species species) {
        return new ResponseEntity<>(speciesService.update(species), HttpStatus.CREATED);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    public ResponseEntity<List<Species>> findAll() {
        return new ResponseEntity<>(speciesService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Species> findById(@PathVariable("id") Long id){
        return new ResponseEntity<>(speciesService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        this.speciesService.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}