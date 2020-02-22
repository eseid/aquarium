package fr.upem.aquarium.controllers;

import fr.upem.aquarium.entities.Activity;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    //@RequestBody mappe le corp de httpRequest à un objet
    @PostMapping
    public ResponseEntity<Activity> save(@RequestBody Activity activity) {
        return new ResponseEntity<>(activityService.save(activity), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Activity> update(@RequestBody Activity activity) {
        Activity savedActivity = activityService.save(activity);
        return new ResponseEntity<>(savedActivity, HttpStatus.OK);
    }

    //@requestParam pour extraire les paramétre de la requéte
    @GetMapping
    public ResponseEntity<List<Activity>> findAll() {
        System.out.println(activityService.findAll());
        return new ResponseEntity<>(activityService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activity> findById(@PathVariable("id") Long id){
        return new ResponseEntity<Activity>(activityService.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id){
        System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        activityService.deleteById(id);
        return new ResponseEntity<Void>( HttpStatus.OK);
    }
}
