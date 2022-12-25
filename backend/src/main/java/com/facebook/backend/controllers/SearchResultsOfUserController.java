package com.facebook.backend.controllers;

import com.facebook.backend.controllers.requestObjects.SearchResultsOfUserRequestObject;
import com.facebook.backend.entities.SearchResultsOfUser;
import com.facebook.backend.entities.User;
import com.facebook.backend.services.ISearchResultsOfUserService;
import com.facebook.backend.utilities.ICrudUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/search-results-of-user")
public class SearchResultsOfUserController implements ICrudUtility<SearchResultsOfUser, SearchResultsOfUserRequestObject> {
    @Autowired
    private ISearchResultsOfUserService service;

    @Override
    @PostMapping
    @CacheEvict(cacheNames = "allSearchResultsOfUser", allEntries = true)
    public ResponseEntity<SearchResultsOfUser> store(@RequestBody SearchResultsOfUserRequestObject o) {
        try {
            SearchResultsOfUser resultsOfUser = new SearchResultsOfUser();

            resultsOfUser.setUser(o.getUser());
            resultsOfUser.setWanted(o.getWanted());

            return ResponseEntity.ok(service.save(resultsOfUser));
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    @CacheEvict(cacheNames = "allSearchResultsOfUser", allEntries = true)
    public ResponseEntity<?> update(long id, SearchResultsOfUserRequestObject o) {
        return null;
    }

    @Override
    @DeleteMapping(value = "{id}")
    @CacheEvict(cacheNames = "allSearchResultsOfUser", allEntries = true)
    public void destroy(@PathVariable long id) {
        service.deleteById(id);
    }

    @Override
    public ResponseEntity<?> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<SearchResultsOfUser>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @GetMapping(value = "/count/{id}")
    public ResponseEntity<Long> count(@PathVariable long id) {
        return ResponseEntity.ok(service.countByUserId(id));
    }

    @GetMapping(value = "/{id}")
    @Cacheable("allSearchResultsOfUser")
    public ResponseEntity<List<SearchResultsOfUser>> searchResultsOfUser(@PathVariable long id){
        try {
            ArrayList<SearchResultsOfUser> resultsOfUsers = (ArrayList<SearchResultsOfUser>) service.findByUserId(id);
            ArrayList<SearchResultsOfUser> restrictedData = new ArrayList<>();

            for(SearchResultsOfUser resultsOfUser : resultsOfUsers){
                User user = new User(resultsOfUser.getUser().getName(), resultsOfUser.getUser().getSurname());

                restrictedData.add(new SearchResultsOfUser(user, resultsOfUser.getWanted()));
            }

            return ResponseEntity.ok(restrictedData
            );
        }catch (Exception e){
            throw e;
        }
    }
}
