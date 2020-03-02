package fr.upem.aquarium.controllerTest;

import fr.upem.aquarium.entities.Activity;
import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.services.ActivityService;
import fr.upem.aquarium.services.AnimalService;
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

import java.time.Instant;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class ActivityControllerTest {

    @MockBean
    private ActivityService activityService;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @LocalServerPort
    private int port;

    @WithMockUser(roles="ADMIN")
    @Test
    public void findAllTest() throws Exception {
        Activity activity = activityService.save(new Activity("nourrissage", Instant.parse("2020-03-10T10:12:35Z"),
                true, "nourrir les tortues",
                null));

        when(activityService.findAll()).thenReturn(Stream.of(activity).collect(Collectors.toList()));
        assertEquals(1, activityService.findAll().size());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void findByIdTest() throws Exception {
        Activity activity = new Activity("nourrissage", Instant.parse("2020-03-10T10:12:35Z"),
                true, "nourrir les tortues",
                null);

        Optional<Activity> optional = Optional.of(activity);
        when(activityService.findById((long) 1)).thenReturn(optional);

        assertEquals(activity, activityService.findById((long)1).get());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void saveTest() throws Exception {
        Activity activity = activityService.save(new Activity("nourrissage", Instant.parse("2020-03-10T10:12:35Z"),
                true, "nourrir les tortues",
                null));
        when(activityService.save(activity)).thenReturn(activity);
        assertEquals(activity, activityService.save(activity));
    }

    @Test
    public void unauthorizationConnectionTest(){
        ResponseEntity<String> response = testRestTemplate.getForEntity("http://localhost:" + port + "/api/activities/", String.class);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }
    
}
