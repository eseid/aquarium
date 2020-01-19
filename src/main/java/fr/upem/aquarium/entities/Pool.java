package fr.upem.aquarium.entities;

import fr.upem.aquarium.entities.enumeration.State;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Data
@ToString
@NoArgsConstructor
@Entity
@Table(name = "pools")
public class Pool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "capacity")
    private int capacity;
    @Column(name = "volume")
    private double volume;
    @Enumerated(EnumType.ORDINAL)
    private State state;

    @OneToMany(mappedBy = "pool", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Animal> listOfAnimals;

    @ManyToOne
    @JoinColumn(name = "sector_id")
    private Sector sector;

    @ManyToMany
    @JoinTable(
            name = "pool_activity",
            joinColumns = @JoinColumn(name = "pool_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id"))
    private Set<Activity> listOfActivities;

    public Pool(int capacity, double volume, State state, Sector sector) {
        this.capacity = capacity;
        this.volume = volume;
        this.state = state;
        this.sector = sector;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pool pool = (Pool) o;
        return capacity == pool.capacity &&
                Double.compare(pool.volume, volume) == 0 &&
                id.equals(pool.id) &&
                state == pool.state;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, capacity, volume, state);
    }
}