
package fr.upem.aquarium.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.*;

/**
 *
 */
@Entity
@Table(name = "animals")
public class Animal implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "sexe")
    private String sexe;
    @Column(name = "destinctive_sign")
    private String destinctiveSign;
    @Column(name = "checkin_date")
    private Instant checkinDate;
    @Column(name = "checkout_date")
    private Instant checkoutDate;
    @Column(columnDefinition = "TEXT")
    private String picture;

    @ManyToOne
    @JoinColumn(name = "pool_id")
    private Pool pool;

    @ManyToOne
    @JoinColumn(name = "species_id")
    private Species species;

    public Animal() {
    }



    public Animal(String name, String sexe, String destinctiveSign, Instant checkinDate, Instant checkoutDate, Species species, Pool pool, String picture) {
        this.name = name;
        this.sexe = sexe;
        this.destinctiveSign = destinctiveSign;
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.species = species;
        this.pool = pool;
        this.picture = picture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public String getDestinctiveSign() {
        return destinctiveSign;
    }

    public void setDestinctiveSign(String destinctiveSign) {
        this.destinctiveSign = destinctiveSign;
    }

    public Instant getCheckinDate() {
        return checkinDate;
    }

    public void setCheckinDate(Instant checkinDate) {
        this.checkinDate = checkinDate;
    }

    public Instant getCheckoutDate() {
        return checkoutDate;
    }

    public void setCheckoutDate(Instant checkoutDate) {
        this.checkoutDate = checkoutDate;
    }

    public Pool getPool() {
        return pool;
    }

    public void setPool(Pool pool) {
        this.pool = pool;
    }

    public Species getSpecies() {
        return species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return id.equals(animal.id) &&
                name.equals(animal.name) &&
                sexe.equals(animal.sexe) &&
                destinctiveSign.equals(animal.destinctiveSign);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, sexe, destinctiveSign);
    }

    @Override
    public String toString() {
        return "Animal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sexe='" + sexe + '\'' +
                ", destinctiveSign='" + destinctiveSign + '\'' +
                ", checkinDate=" + checkinDate +
                ", checkoutDate=" + checkoutDate +
                ", pool=" + pool +
                ", species=" + species +
                '}';
    }
}