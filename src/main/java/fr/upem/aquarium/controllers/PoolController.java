package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.services.AnimalService;
import fr.upem.aquarium.services.PoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/pools")
public class PoolController {

    @Autowired
    private PoolService poolService;

    @Autowired
    private AnimalService animalService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    public ResponseEntity<Pool> save(@RequestBody Pool pool) {
        return new ResponseEntity<>(poolService.save(pool), HttpStatus.CREATED);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    public ResponseEntity<Page<Pool>> findAll(@RequestParam(name = "page", defaultValue = "0") int page,
                                              @RequestParam(name = "size", defaultValue = "10") int size) {
        return new ResponseEntity<>(poolService.findAll(page, size), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pool> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Pool>(poolService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @GetMapping("/{id}/animals")
    public ResponseEntity<Set<Animal>> findAllByPoolId(@PathVariable("id") Long id) {
        return new ResponseEntity<>(this.animalService.findAllByPoolId(id), HttpStatus.OK);
    }

}