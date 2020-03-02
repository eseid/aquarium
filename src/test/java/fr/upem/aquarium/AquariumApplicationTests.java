package fr.upem.aquarium;

import fr.upem.aquarium.controllerTest.ActivityControllerTest;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AquariumApplicationTests {

    @Test
    void contextLoads() throws Exception {
       ActivityControllerTest activityControllerTest =  new ActivityControllerTest();
       //activityControllerTest.findAllTest();
       //activityControllerTest.findByIdTest();
       //activityControllerTest.saveTest();
       activityControllerTest.unauthorizationConnectionTest();
    }

}
