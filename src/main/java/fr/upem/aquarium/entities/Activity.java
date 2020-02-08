package fr.upem.aquarium.entities;

import javax.persistence.*;
import java.time.Instant;
import java.util.*;

/**
 *
 */
@Entity
@Table(name = "activities")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "type")
    private String type;
    @Column(name = "activity_date")
    private Instant activityDate;
    @Column(name = "is_public")
    private boolean isPublic;

    public Activity() {
    }

    public Activity(String type, Instant activityDate, boolean isPublic) {
        this.type = type;
        this.activityDate = activityDate;
        this.isPublic = isPublic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Instant getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(Instant activityDate) {
        this.activityDate = activityDate;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Activity activity = (Activity) o;
        return isPublic == activity.isPublic &&
                id.equals(activity.id) &&
                type.equals(activity.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, isPublic);
    }

    @Override
    public String toString() {
        return "Activity{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", activityDate=" + activityDate +
                ", isPublic=" + isPublic +
                '}';
    }
}