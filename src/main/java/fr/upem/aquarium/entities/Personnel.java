package fr.upem.aquarium.entities;

import fr.upem.aquarium.entities.enumeration.RoleName;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.Instant;
import java.util.*;

/**
 * 
 */
@Data
@NoArgsConstructor
@ToString
@Entity
@Table(name = "personnels")
public class Personnel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "address")
    private String address;
    @Column(name = "birth_day")
    private Instant birthDay;
    @Column(name = "social_security_number")
    private String socialSecurityNumber;

    @ManyToMany
    @JoinTable(
            name = "personnel_role",
            joinColumns = @JoinColumn(name = "personnel_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> listOfRoles;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = false)
    @JoinColumn(name = "personnel_id")
    private Set<Pool> listOfPool;

    @ManyToMany
    @JoinTable(
            name = "personnel_activity",
            joinColumns = @JoinColumn(name = "personnel_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id"))
    private Set<Activity> listOfActivity;

    @ManyToMany
    @JoinTable(
            name = "personnel_sector",
            joinColumns = @JoinColumn(name = "personnel_id"),
            inverseJoinColumns = @JoinColumn(name = "sector_id"))
    private Set<Sector> listOfSectors;

    public Personnel(String firstName, String lastName, String address, Instant birthDay, String socialSecurityNumber, Set<Role> listOfRoles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.birthDay = birthDay;
        this.socialSecurityNumber = socialSecurityNumber;
        this.listOfRoles = listOfRoles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Personnel personnel = (Personnel) o;
        return id.equals(personnel.id) &&
                firstName.equals(personnel.firstName) &&
                lastName.equals(personnel.lastName) &&
                address.equals(personnel.address) &&
                socialSecurityNumber.equals(personnel.socialSecurityNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, address, socialSecurityNumber);
    }
}