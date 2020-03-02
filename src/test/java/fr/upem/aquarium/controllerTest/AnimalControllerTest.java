package fr.upem.aquarium.controllerTest;

import fr.upem.aquarium.dao.RoleRepository;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.entities.Role;
import fr.upem.aquarium.entities.enumeration.RoleName;
import fr.upem.aquarium.services.AnimalService;
import fr.upem.aquarium.services.PersonnalService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.context.WebApplicationContext;

import java.time.Instant;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class AnimalControllerTest {

    @MockBean
    private AnimalService animalService;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @LocalServerPort
    private int port;

    @WithMockUser(roles="ADMIN")
    @Test
    public void findAllTest() throws Exception {
        Animal animal1 = animalService.save(new Animal("dauphin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), null, null,
                null));

        when(animalService.findAll()).thenReturn(Stream.of(animal1).collect(Collectors.toList()));
        assertEquals(1, animalService.findAll().size());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void findByIdTest() throws Exception {
        Animal animal = new Animal("dauphin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), null, null,
                null);

        Optional<Animal> optional = Optional.of(animal);
        when(animalService.findById((long) 1)).thenReturn(optional);

        assertEquals(animal, animalService.findById((long)1).get());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void saveTest() throws Exception {
        Animal animal = animalService.save(new Animal("dauphin", "Femelle", "sauvage",
                Instant.parse("1993-01-01T10:12:35Z"), Instant.parse("1993-01-01T10:12:35Z"), null, null,
                null));
        when(animalService.save(animal)).thenReturn(animal);
        assertEquals(animal, animalService.save(animal));
    }

    @Test
    public void unauthorizationConnectionTest(){
        ResponseEntity<String> response = testRestTemplate.getForEntity("http://localhost:" + port + "/api/animals/", String.class);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

}
