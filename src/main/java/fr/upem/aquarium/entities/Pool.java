package fr.upem.aquarium.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fr.upem.aquarium.entities.enumeration.State;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "pools")
public class Pool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "capacity")
    private int capacity;
    @Column(name = "volume")
    private double volume;
    @Enumerated(EnumType.ORDINAL)
    private State state;

    @ManyToOne
    @JoinColumn(name = "sector_id")
    private Sector sector;

    @ManyToOne
    @JoinColumn(name = "responsible_id")
    private Personnal responsible;

    @ManyToMany
    @JoinTable(
            name = "pool_activity",
            joinColumns = @JoinColumn(name = "pool_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id"))
    private Set<Activity> listOfActivities = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "pools_personnals",
            joinColumns = @JoinColumn(name = "pool_id"),
            inverseJoinColumns = @JoinColumn(name = "personnal_id"))
    private Set<Personnal> listOfPersonals = new HashSet<>();

    public Pool() {
    }

    public Pool(String name, int capacity, double volume, State state, Sector sector, Personnal responsible) {
        this.name = name;
        this.capacity = capacity;
        this.volume = volume;
        this.state = state;
        this.sector = sector;
        this.responsible = responsible;
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

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public double getVolume() {
        return volume;
    }

    public void setVolume(double volume) {
        this.volume = volume;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Sector getSector() {
        return sector;
    }

    public void setSector(Sector sector) {
        this.sector = sector;
    }

    public Personnal getResponsible() {
        return responsible;
    }

    public void setResponsible(Personnal responsible) {
        this.responsible = responsible;
    }

    public Set<Activity> getListOfActivities() {
        return listOfActivities;
    }

    public void setListOfActivities(Set<Activity> listOfActivities) {
        this.listOfActivities = listOfActivities;
    }
    
    public Set<Personnal> getListOfPersonals() {
        return listOfPersonals;
    }

    public void setListOfPersonals(Set<Personnal> listOfPersonnals) {
        this.listOfPersonals = listOfPersonnals;
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

    @Override
    public String toString() {
        return "Pool{" +
                "id=" + id +
                ", capacity=" + capacity +
                ", volume=" + volume +
                ", state=" + state +
                ", sector=" + sector +
                '}';
    }
}