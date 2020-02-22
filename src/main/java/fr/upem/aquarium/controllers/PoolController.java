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

import java.util.List;
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

    @PutMapping
    public ResponseEntity<Pool> update(@RequestBody  Pool pool) {
        Pool savedPool = poolService.update(pool);
        return new ResponseEntity<Pool>(savedPool, HttpStatus.OK);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    public ResponseEntity<List<Pool>> findAll() {
        return new ResponseEntity<>(poolService.findAll(), HttpStatus.OK);
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