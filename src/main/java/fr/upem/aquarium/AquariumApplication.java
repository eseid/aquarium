package fr.upem.aquarium;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import java.util.TimeZone;

import javax.annotation.PostConstruct;

import fr.upem.aquarium.dao.AnimalsRepository;
import fr.upem.aquarium.entities.*;
import fr.upem.aquarium.entities.enumeration.RoleName;
import fr.upem.aquarium.services.ActivityService;
import fr.upem.aquarium.services.PersonnalService;
import fr.upem.aquarium.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import fr.upem.aquarium.dao.PoolRepository;
import fr.upem.aquarium.dao.SectorRepository;
import fr.upem.aquarium.dao.SpeciesRepository;
import fr.upem.aquarium.entities.enumeration.State;
import fr.upem.aquarium.services.AnimalService;

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
    private AnimalsRepository animalsRepository;

    @Autowired
    private AnimalService animalService;

    @Autowired
    private ActivityService activityService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PersonnalService personnalService;

    public static void main(String[] args) {
        SpringApplication.run(AquariumApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Role role = new Role(RoleName.EMPLOYEE);
        roleService.save(role);
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        Personnal eseid = new Personnal("Eseid", "BENMAMMAR", "Noisy",
                Instant.parse("1993-01-01T10:12:35Z"), "12334567890", roles);

        Personnal john = new Personnal("john", "john", "Noisy",
                Instant.parse("1993-01-01T10:12:35Z"), "12334567890", roles);
        personnalService.save(john);
        personnalService.save(eseid);


        Sector sector = this.sectorRepository.save(new Sector("Atlantique","secteur_1"));
        Activity activity = activityService.save(new Activity("nourrissage", Instant.parse("1993-01-01T10:12:35Z"), true, "nourrir les tortues"));

        Pool pool = new Pool("pool_1", 5, 34.5, State.CLEAN, sector, eseid);
        pool.getListOfActivities().add(activity);
        pool = poolRepository.save(pool);


        Sector sector2 = this.sectorRepository.save(new Sector("ile des roquins","secteur_2"));
        Activity activity2 = activityService.save(new Activity("animation", Instant.parse("1993-01-01T10:12:35Z"), true, "animation du basson des roquins"));

        Pool pool2 = new Pool("pool_2",5, 34.5, State.CLEAN, sector2, eseid);
        pool2.getListOfActivities().add(activity2);
        pool2 = poolRepository.save(pool2);

        Sector sector3 = this.sectorRepository.save(new Sector("Méditerranée","secteur_3"));
        Activity activity3 = activityService.save(new Activity("animation", Instant.parse("1993-01-01T10:12:35Z"), true, "jouer avec les poisson méditerranéane"));

        Pool pool3 = new Pool("pool_3",5, 34.5, State.CLEAN, sector3, eseid);
        pool3.getListOfActivities().add(activity3);
        pool3.getListOfPersonals().add(eseid);
        pool3.getListOfPersonals().add(john);

        pool3 = poolRepository.save(pool3);


        Species species = speciesRepository.save(new Species(3,"test", false, 5));


        // Species species = speciesRepository.save(new Species(12, "diet", true, 3));
        Animal animal = animalService.save(new Animal("dauphin", "F", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool, "path"));

        System.out.println(animal);
        Animal animal2 = animalService.save(new Animal("poisson", "F", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool2, "path"));
        System.out.println(animal2);

        Set<Animal> animalsList = this.animalsRepository.findAllByPoolId(pool.getId());
        animalsList.forEach(animal1 -> System.out.println(animal1));




    }


    @PostConstruct
    void init() {
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
    }
}