package fr.upem.aquarium.entities;

import lombok.AllArgsConstructor;
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
@AllArgsConstructor
@Table(name = "sectors")
public class Sector {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;

    public Sector(String name, String location) {
        this.name = name;
        this.location = location;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sector sector = (Sector) o;
        return id.equals(sector.id) &&
                name.equals(sector.name) &&
                location.equals(sector.location);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, location);
    }
}