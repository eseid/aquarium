package fr.upem.aquarium.controllerTest;

import fr.upem.aquarium.entities.Pool;
import fr.upem.aquarium.entities.Sector;
import fr.upem.aquarium.entities.enumeration.State;
import fr.upem.aquarium.services.PoolService;
import fr.upem.aquarium.services.SectorService;
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

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class SectorControllerTest {
    
    @MockBean
    private SectorService sectorService;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @LocalServerPort
    private int port;

    @WithMockUser(roles="ADMIN")
    @Test
    public void findAllTest() throws Exception {
        Sector sector = this.sectorService.save(new Sector("MEDETERRANEE", "La méditerranée",
                null));

        when(sectorService.findAll()).thenReturn(Stream.of(sector).collect(Collectors.toList()));
        assertEquals(1, sectorService.findAll().size());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void findByIdTest() throws Exception {
        Sector sector = new Sector("MEDETERRANEE", "La méditerranée",
                null);

        Optional<Sector> optional = Optional.of(sector);
        when(sectorService.findById((long) 1)).thenReturn(optional);

        assertEquals(sector, sectorService.findById((long)1).get());
    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void saveTest() throws Exception {
        Sector sector = this.sectorService.save(new Sector("MEDETERRANEE", "La méditerranée",
                null));
        when(sectorService.save(sector)).thenReturn(sector);
        assertEquals(sector, sectorService.save(sector));
    }

    @Test
    public void unauthorizationConnectionTest(){
        ResponseEntity<String> response = testRestTemplate.getForEntity("http://localhost:" + port + "/api/sectors/", String.class);
        assertEquals(response.getStatusCode(), HttpStatus.OK);
    }

}
