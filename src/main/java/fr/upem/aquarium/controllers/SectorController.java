package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.Sector;
import fr.upem.aquarium.services.PoolService;
import fr.upem.aquarium.services.SectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/sectors")
public class SectorController {

    @Autowired
    private SectorService sectorService;

    @Autowired
    private PoolService poolService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Sector> save(@RequestBody Sector sector) {
        return new ResponseEntity<>(sectorService.save(sector), HttpStatus.CREATED);
    }

    @PutMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Sector> update(@RequestBody Sector sector) {
        return new ResponseEntity<>(sectorService.update(sector), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Sector>> findAll() {
        return new ResponseEntity<>(sectorService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/pools/{id}")
    public ResponseEntity<Set<Pool>> findAllPoolsBySectorId (@PathVariable("id") Long sectorId) {
        return new ResponseEntity<>(poolService.findAllBySectorId(sectorId), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Sector> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Sector>(sectorService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        this.sectorService.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }


}
