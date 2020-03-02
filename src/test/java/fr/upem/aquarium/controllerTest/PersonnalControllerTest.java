package fr.upem.aquarium.controllerTest;

import fr.upem.aquarium.dao.PoolRepository;
import fr.upem.aquarium.dao.RoleRepository;
import fr.upem.aquarium.dao.SectorRepository;
import fr.upem.aquarium.dto.LoginRequest;
import fr.upem.aquarium.entities.Personnal;
import fr.upem.aquarium.entities.Role;
import fr.upem.aquarium.entities.enumeration.RoleName;
import fr.upem.aquarium.services.PersonnalService;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class PersonnalControllerTest {

    @MockBean
    private PersonnalService personnalService;

    @MockBean
    private RoleRepository roleRepository;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @LocalServerPort
    private int port;

    @Autowired
    private WebApplicationContext context;

    @WithMockUser(roles="ADMIN")
    @Test
    public void findAllTest() throws Exception {
        Role adminRole = new Role(RoleName.ROLE_ADMIN);
        adminRole = roleRepository.save(adminRole);
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);

        Role responsibleRole = new Role(RoleName.ROLE_RESPONSIBLE);
        responsibleRole = roleRepository.save(responsibleRole);
        Set<Role> responsibleRoles = new HashSet<>();
        responsibleRoles.add(responsibleRole);

        Personnal admin = new Personnal("Admin", "Admin", null, null,
                null, null,
                "admin@localhost", "Admin@75#",  adminRoles);

        when(personnalService.findAll()).thenReturn(Stream.of(admin).collect(Collectors.toList()));

        assertEquals(1, personnalService.findAll().size());

    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void findByIdTest() throws Exception {
        Role adminRole = new Role(RoleName.ROLE_ADMIN);
        adminRole = roleRepository.save(adminRole);
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);

        Role responsibleRole = new Role(RoleName.ROLE_RESPONSIBLE);
        responsibleRole = roleRepository.save(responsibleRole);
        Set<Role> responsibleRoles = new HashSet<>();
        responsibleRoles.add(responsibleRole);

        Personnal admin = new Personnal("Admin", "Admin", null, null,
                null, null,
                "admin@localhost", "Admin@75#",  adminRoles);

        Optional<Personnal> optional = Optional.of(admin);
       when(personnalService.findById((long) 1)).thenReturn(optional);

        assertEquals(admin, personnalService.findById((long)1).get());

    }

    @WithMockUser(roles="ADMIN")
    @Test
    public void saveTest() throws Exception {
        Role adminRole = new Role(RoleName.ROLE_ADMIN);
        adminRole = roleRepository.save(adminRole);
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);

        Role responsibleRole = new Role(RoleName.ROLE_RESPONSIBLE);
        responsibleRole = roleRepository.save(responsibleRole);
        Set<Role> responsibleRoles = new HashSet<>();
        responsibleRoles.add(responsibleRole);

        Personnal admin = new Personnal("Admin", "Admin", null, null,
                null, null,
                "admin@localhost", "Admin@75#",  adminRoles);

        when(personnalService.save(admin)).thenReturn(admin);

        assertEquals(admin, personnalService.save(admin));
    }


    @Test
    public void unauthorizationConnectionTest(){
        ResponseEntity<String> response = testRestTemplate.getForEntity("http://localhost:" + port + "/api/personals/", String.class);
        assertEquals(response.getStatusCode(), HttpStatus.UNAUTHORIZED);
    }

}
