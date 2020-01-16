package fr.upem.aquarium.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.*;

/**
 * 
 */

@Data
@ToString
@NoArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "pool_id")
    private Pool pool;

    @ManyToOne
    @JoinColumn(name = "species_id")
    private Species species;

    public Animal(String name, String sexe, String destinctiveSign, Instant checkinDate, Instant checkoutDate) {
        this.name = name;
        this.sexe = sexe;
        this.destinctiveSign = destinctiveSign;
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
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
}