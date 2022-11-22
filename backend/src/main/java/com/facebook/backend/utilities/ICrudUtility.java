package com.facebook.backend.utilities;

import org.springframework.http.ResponseEntity;
import java.util.List;

public interface ICrudUtility<T, O> {
    public ResponseEntity<T> store(O o);
    public ResponseEntity<?> update(long id ,O o);
    public void destroy(long id);
    public ResponseEntity<?> findById(long id);
    public ResponseEntity<List<T>> findAll();
    public ResponseEntity<Long> count();
}
