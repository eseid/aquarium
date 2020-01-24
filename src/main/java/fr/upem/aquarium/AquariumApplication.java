package fr.upem.aquarium;

import fr.upem.aquarium.dao.AnimalsRepository;
import fr.upem.aquarium.dao.PoolRepository;
import fr.upem.aquarium.dao.SectorRepository;
import fr.upem.aquarium.dao.SpeciesRepository;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.Sector;
import fr.upem.aquarium.entities.Species;
import fr.upem.aquarium.entities.enumeration.State;
import fr.upem.aquarium.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.annotation.PostConstruct;
import java.time.Instant;
import java.util.TimeZone;

@SpringBootApplication
@EntityScan(basePackageClasses = { AquariumApplication.class, Jsr310JpaConverters.class })
public class AquariumApplication implements CommandLineRunner {

    @Autowired
    private SectorRepository sectorRepository;
    @Autowired
    private PoolRepository poolRepository;
    @Autowired
    private SpeciesRepository speciesRepository;

    @Autowired
    private AnimalService animalService;

    public static void main(String[] args) {
        SpringApplication.run(AquariumApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Sector sector = this.sectorRepository.save(new Sector("Secteur 1","Est"));
        Pool pool = poolRepository.save(new Pool(5, 34.5, State.CLEAN, sector));
        speciesRepository.save(new Species(3,"test", false, 5));


       // Species species = speciesRepository.save(new Species(12, "diet", true, 3));
        Animal animal = animalService.save(new Animal("dauphin", "F", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z")));
        Animal animal2 = animalService.save(new Animal("poisson", "F", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z")));

    }


    @PostConstruct
    void init() {
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
    }
}
