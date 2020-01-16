package fr.upem.aquarium.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.*;

/**
 * 
 */
@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "species")
public class Species {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "life_expectancy")
    private int lifeExpectancy;
    private String diet;
    @Column(name = "is_threat")
    private boolean isThreat;
    @Column(name = "threat_level")
    private int threatLevel;

    @OneToMany(mappedBy = "species", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Animal> listOfAnimals;

    public Species(int lifeExpectancy, String diet, boolean isThreat, int threatLevel) {
        this.lifeExpectancy = lifeExpectancy;
        this.diet = diet;
        this.isThreat = isThreat;
        this.threatLevel = threatLevel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Species species = (Species) o;
        return lifeExpectancy == species.lifeExpectancy &&
                isThreat == species.isThreat &&
                id.equals(species.id) &&
                diet.equals(species.diet);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, lifeExpectancy, diet, isThreat);
    }
}