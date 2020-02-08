package fr.upem.aquarium.entities;

import javax.persistence.*;
import java.util.*;

/**
 *
 */
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

    public Species() {
    }

    public Species(int lifeExpectancy, String diet, boolean isThreat, int threatLevel) {
        this.lifeExpectancy = lifeExpectancy;
        this.diet = diet;
        this.isThreat = isThreat;
        this.threatLevel = threatLevel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getLifeExpectancy() {
        return lifeExpectancy;
    }

    public void setLifeExpectancy(int lifeExpectancy) {
        this.lifeExpectancy = lifeExpectancy;
    }

    public String getDiet() {
        return diet;
    }

    public void setDiet(String diet) {
        this.diet = diet;
    }

    public boolean isThreat() {
        return isThreat;
    }

    public void setThreat(boolean threat) {
        isThreat = threat;
    }

    public int getThreatLevel() {
        return threatLevel;
    }

    public void setThreatLevel(int threatLevel) {
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

    @Override
    public String toString() {
        return "Species{" +
                "id=" + id +
                ", lifeExpectancy=" + lifeExpectancy +
                ", diet='" + diet + '\'' +
                ", isThreat=" + isThreat +
                ", threatLevel=" + threatLevel +
                '}';
    }
}