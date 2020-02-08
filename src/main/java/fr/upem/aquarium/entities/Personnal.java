package fr.upem.aquarium.entities;

import javax.persistence.*;
import java.time.Instant;
import java.util.*;

/**
 *
 */
@Entity
@Table(name = "personnels")
public class Personnal {

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
    private Set<Sector>  sectorsList;

    public Personnal() {
    }

    public Personnal(String firstName, String lastName, String address, Instant birthDay, String socialSecurityNumber, Set<Role> listOfRoles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.birthDay = birthDay;
        this.socialSecurityNumber = socialSecurityNumber;
        this.listOfRoles = listOfRoles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Instant getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Instant birthDay) {
        this.birthDay = birthDay;
    }

    public String getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public void setSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public Set<Role> getListOfRoles() {
        return listOfRoles;
    }

    public void setListOfRoles(Set<Role> listOfRoles) {
        this.listOfRoles = listOfRoles;
    }

    public Set<Pool> getListOfPool() {
        return listOfPool;
    }

    public void setListOfPool(Set<Pool> listOfPool) {
        this.listOfPool = listOfPool;
    }

    public Set<Activity> getListOfActivity() {
        return listOfActivity;
    }

    public void setListOfActivity(Set<Activity> listOfActivity) {
        this.listOfActivity = listOfActivity;
    }

    public Set<Sector> getSectorsList() {
        return sectorsList;
    }

    public void setSectorsList(Set<Sector> sectorsList) {
        this.sectorsList = sectorsList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Personnal personnel = (Personnal) o;
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

    @Override
    public String toString() {
        return "Personnal{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", birthDay=" + birthDay +
                ", socialSecurityNumber='" + socialSecurityNumber + '\'' +
                '}';
    }
}