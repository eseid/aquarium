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

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class ActivityServiceImpl implements ActivityService {
    private Logger logger = Logger.getLogger(AnimalServiceImpl.class.getName());

    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public Activity save(Activity activity) {
        if(activityRepository.existsById(activity.getId()))
            throw new ExistsException( "Pool with id " + activity.getId()+ " exist!");
        return activityRepository.save(activity);
    }

    @Override
    public Activity update(Activity activity) {
        if(activityRepository.existsById(activity.getId())) {
            logger.info("update success of pool with id " + activity.getId());
            return activityRepository.save(activity);
        }
        logger.info("pool with id " + activity.getId() + " is not exist, a new pool is created ");
        return activityRepository.save(activity);
    }

    @Override
    public Page<Activity> findAll(int page, int size) {
        if(page < 0 || size < 0){
            logger.severe("size of page or size have  negative value");
            throw new ExistsException("error in value of page or size");
        }
        return activityRepository.findAll(PageRequest.of(page, size));
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
