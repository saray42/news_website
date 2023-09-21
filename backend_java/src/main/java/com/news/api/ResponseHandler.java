package com.news.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class ResponseHandler {
    public ResponseEntity<Object> generateResponse(String message, HttpStatus status, String username) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("message", message);
        map.put("status", status.value());
        map.put("username", username);

        return new ResponseEntity<Object>(map, status);
    }
}
