package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Sector;
import fr.upem.aquarium.services.SectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sectors")
public class SectorController {

    @Autowired
    private SectorService sectorService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    public ResponseEntity<Sector> save(@RequestBody Sector sector) {
        return new ResponseEntity<>(sectorService.save(sector), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Sector> update(@RequestBody Sector sector) {
        return new ResponseEntity<>(sectorService.update(sector), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Sector>> findAll() {
        return new ResponseEntity<>(sectorService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sector> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Sector>(sectorService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        this.sectorService.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
