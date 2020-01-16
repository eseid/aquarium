package fr.upem.aquarium.entities;

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
}