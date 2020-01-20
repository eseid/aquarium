package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/animals")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @PostMapping
    public ResponseEntity<Animal> save(@RequestBody Animal animal) {
        Animal savedAnimal = animalService.save(animal);
        return new ResponseEntity<>(savedAnimal, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<Animal>> findAll(@RequestParam(name = "page", defaultValue = "0") int page,
                                                @RequestParam(name = "size", defaultValue = "10") int size) {
        return new ResponseEntity<Page<Animal>>(animalService.findAll(page, size), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> findById(@PathVariable("id") Long id){
       return new ResponseEntity<Animal>(animalService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        animalService.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}