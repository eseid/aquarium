package fr.upem.aquarium.services.impl;

import fr.upem.aquarium.dao.ActivityRepository;
import fr.upem.aquarium.entities.Activity;
import fr.upem.aquarium.exceptions.ExistsException;
import fr.upem.aquarium.exceptions.NotFoundException;
import fr.upem.aquarium.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class ActivityServiceImpl implements ActivityService {
    private Logger logger = Logger.getLogger(AnimalServiceImpl.class.getName());

    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public Activity save(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public Activity update(Activity activity) {
        if(!activityRepository.existsById(activity.getId()))
            throw new ExistsException( "The activity with l'id" + activity.getId()+ " is not exist !");

        logger.info("pool with id " + activity.getId() + " is not exist, a new pool is created ");
        return activityRepository.save(activity);
    }

    @Override
    public List<Activity> findAll() {
        return activityRepository.findAll();
    }

    @Override
    public Optional<Activity> findById(Long id) {
        Optional<Activity> activity = activityRepository.findById(id);
        if(!activity.isPresent()){
            logger.info("the activity with id " + id + " is not exist ");
            throw new NotFoundException("the activity with id " + id + " is not exist ");
        }
        logger.info("the activity with id " + id + " id found with success ");
        return activity;
    }

    @Override
    public void deleteById(Long id) {
        if (!activityRepository.existsById(id)) {
            logger.info("activity with id " + id + " is not exist");
            throw new NotFoundException("activity with id " + id + " is not exist");
        }
        activityRepository.deleteById(id);
        logger.info("activity with id " + id + " is deleted with success");
    }
}
