package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.*;
import fr.upem.aquarium.entities.*;
import fr.upem.aquarium.entities.enumeration.RoleName;
import fr.upem.aquarium.entities.enumeration.State;
import fr.upem.aquarium.services.*;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class InitDatabaseImpl implements InitDatabase {

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


    public List<String> encodeImageTo64Base(String type, int length){
        List<String> images = new ArrayList<>();
        for(int i = 0; i < length; i++){
            File f =  new File("src/main/resources/img/"+ type + ""+i+".jpg");
            String encodstring = encodeFileToBase64Binary(f);
            System.out.println(encodstring);
            images.add(encodstring);
        }
        return images;
    }

    private static String encodeFileToBase64Binary(File file){
        String encodedfile = null;
        try {
            FileInputStream fileInputStreamReader = new FileInputStream(file);
            byte[] bytes = new byte[(int)file.length()];
            fileInputStreamReader.read(bytes);
            encodedfile = new String(Base64.encodeBase64(bytes), "UTF-8");
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return encodedfile;
    }


    public void initDabase(){

        Activity activity0 = activityService.save(new Activity("nourrissage", Instant.parse("2020-03-10T10:12:35Z"),
                true, "nourrir les tortues",
                "data:image/jpeg;base64," + encodeImageTo64Base("activity", 4).get(0)));

        Activity activity1 = activityService.save(new Activity("Découverte", Instant.parse("2020-03-11T10:12:35Z"),
                true, "Découverte des poissons Sacrés de chine et d'Asie",
                "data:image/jpeg;base64," + encodeImageTo64Base("activity", 4).get(1)));

        Activity activity2 = activityService.save(new Activity("Bassin Tactile", Instant.parse("2020-03-12T10:12:35Z"),
                true, "Serez-vous assez courageux pour toucher une étoile de mer, un crabe, une " +
                "anémone de mer, ou même un œuf de requin",
                "data:image/jpeg;base64," + encodeImageTo64Base("activity", 4).get(2)));

        Activity activity3 = activityService.save(new Activity("Exploration", Instant.parse("2020-03-13T10:12:35Z"),
                true, "Une animation de réalité virtuelle. Plongez dans des décors hypers réalistes " +
                "allants des baleines à bosse du Pacifique jusqu’à l’exploration d’une épave... Une expérience à couper le souffle à tester !",
                "data:image/jpeg;base64," + encodeImageTo64Base("activity", 4).get(3)));

        /***********************************************************************************************************/

        Role role = new Role(RoleName.ROLE_EMPLOYEE);

        roleService.save(role);
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        Role adminRole = new Role(RoleName.ROLE_ADMIN);
        adminRole = roleService.save(adminRole);
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);

        Role responsableRole = new Role(RoleName.ROLE_RESPONSIBLE);
        responsableRole = roleService.save(responsableRole);
        Set<Role> responsableRoles = new HashSet<>();
        responsableRoles.add(responsableRole);

        /***********************************************************************************************************/

        Personnal admin = new Personnal("Admin", "Admin", null, null,
                null, null,
                "admin@localhost", "Admin@75#",  adminRoles);

        Personnal eseid = new Personnal("Eseid", "BENMAMMAR", "homme", "Noisy",
                Instant.parse("1993-01-01T10:12:35Z"), "123345637890",
                "eseidbenmamer@gmail.com", "eseid@06",  roles);

        eseid.getListOfActivity().add(activity0);

        Personnal responsable = new Personnal("Responsable1", "Responsable1", "homme", "Noisy",
                Instant.parse("1993-01-01T10:12:35Z"), "1233456378908999",
                "responsable1@gmail.com", "Res1@06",  responsableRoles);

        Personnal john = new Personnal("john", "john", "homme", "Noisy",
                Instant.parse("1993-01-01T10:12:35Z"), "123345617890","john@outlook.fr" , "John@2020" , roles);
        personnalService.save(john);
        personnalService.save(eseid);
        personnalService.save(admin);
        personnalService.save(responsable);

    /***********************************************************************************************************/

        Sector sector0 = this.sectorRepository.save(new Sector("MEDETERRANEE", "La méditerranée",
                "data:image/jpeg;base64," + encodeImageTo64Base("secteur", 6).get(0)));
        Sector sector1 = this.sectorRepository.save(new Sector("ATLANTIQUE", "L'océan atlantique",
                "data:image/jpeg;base64," + encodeImageTo64Base("secteur", 6).get(1)));
        Sector sector2 = this.sectorRepository.save(new Sector("ARCTIQUE", "L'océan arctique",
                "data:image/jpeg;base64," + encodeImageTo64Base("secteur", 6).get(2)));
        Sector sector3 = this.sectorRepository.save(new Sector("AUSTRAL", "L'océan austrial",
                "data:image/jpeg;base64," + encodeImageTo64Base("secteur", 6).get(3)));
        Sector sector4 = this.sectorRepository.save(new Sector("INDIEN", "L'océan indien",
                "data:image/jpeg;base64," + encodeImageTo64Base("secteur",6).get(4)));
        Sector sector5 = this.sectorRepository.save(new Sector("MER DU NORD", "La mer du nord",
                "data:image/jpeg;base64," + encodeImageTo64Base("secteur", 6).get(5)));

        /***********************************************************************************************************/


        Pool pool0 = new Pool("Le monde des roquins", 5, 34.5, State.CLEAN, sector0, eseid,
                "data:image/jpeg;base64," + encodeImageTo64Base("pool", 6).get(0),
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");
        pool0.getListOfActivities().add(activity3);
        pool0 = poolRepository.save(pool0);

        Pool pool1 = new Pool("Le bassin Piscine", 5, 34.5, State.CLEAN, sector0, eseid,
                "data:image/jpeg;base64," + encodeImageTo64Base("pool", 6).get(1),
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");
        pool1.getListOfActivities().add(activity1);
        pool1 = poolRepository.save(pool1);

        Pool pool2 = new Pool("Le bassin des poissons colorés", 5, 34.5, State.CLEAN, sector0, eseid,
                "data:image/jpeg;base64," + encodeImageTo64Base("pool", 6).get(2),
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");
        pool2.getListOfActivities().add(activity2);
        pool2 = poolRepository.save(pool2);

        Pool pool3 = new Pool("Le basson des méduse", 5, 34.5, State.CLEAN, sector0, eseid,
                "data:image/jpeg;base64," + encodeImageTo64Base("pool", 6).get(4),
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");
        pool3.getListOfActivities().add(activity0);
        pool3 = poolRepository.save(pool3);

        Pool pool4 = new Pool("Le bassin des poisson médeterranées", 5, 34.5, State.CLEAN, sector0, eseid,
                "data:image/jpeg;base64," + encodeImageTo64Base("pool", 6).get(5),
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");
        pool4.getListOfActivities().add(activity2);
        pool4 = poolRepository.save(pool4);

        /***********************************************************************************************************/

        Species species = speciesRepository.save(new Species("Dorade coryphène", 3,"carnivore", false, 5));

        /***********************************************************************************************************/

        Animal animal1 = animalService.save(new Animal("dauphin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(0)));

        Animal animal2 = animalService.save(new Animal("roquin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(1)));

        Animal animal3 = animalService.save(new Animal("poisson rouge", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(2)));

        Animal animal4 = animalService.save(new Animal("Daurade royale", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(3)));

        Animal animal5 = animalService.save(new Animal("Salmo salar", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(4)));

        Animal animal6 = animalService.save(new Animal("Espado", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(5)));

        Animal animal7 = animalService.save(new Animal("Crapet Arlequin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(6)));

        Animal animal8 = animalService.save(new Animal("Rascasse volante Arlequin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), species, pool0,
                "data:image/jpeg;base64," + encodeImageTo64Base("poisson", 8).get(7)));

    }
}
