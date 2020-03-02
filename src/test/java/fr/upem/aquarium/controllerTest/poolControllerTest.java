package fr.upem.aquarium.controllerTest;

import fr.upem.aquarium.entities.Animal;
import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.enumeration.State;
import fr.upem.aquarium.services.AnimalService;
import fr.upem.aquarium.services.PoolService;
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
public class poolControllerTest {
    
    @MockBean
    private PoolService poolService;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @LocalServerPort
    private int port;

    @WithMockUser(roles="ADMIN")
    @Test
    public void findAllTest() throws Exception {
        Pool pool = new Pool("Le monde des roquins", 5, 34.5, State.CLEAN, null, null,
                null,
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");

        when(poolService.findAll()).thenReturn(Stream.of(pool).collect(Collectors.toList()));
        assertEquals(1, poolService.findAll().size());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void findByIdTest() throws Exception {
        Pool pool = new Pool("Le monde des roquins", 5, 34.5, State.CLEAN, null, null,
                null,
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");

        Optional<Pool> optional = Optional.of(pool);
        when(poolService.findById((long) 1)).thenReturn(optional);

        assertEquals(pool, poolService.findById((long)1).get());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void saveTest() throws Exception {
        Pool pool = new Pool("Le monde des roquins", 5, 34.5, State.CLEAN, null, null,
                null,
                "Dans ce bassin vous dévouvrez les magnifiques grands roquins blanc de différentes tailles");
        when(poolService.save(pool)).thenReturn(pool);
        assertEquals(pool, poolService.save(pool));
    }

    @Test
    public void unauthorizationConnectionTest(){
        ResponseEntity<String> response = testRestTemplate.getForEntity("http://localhost:" + port + "/api/pools/", String.class);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

}
