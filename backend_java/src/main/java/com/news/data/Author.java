package com.news.data;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Author {

    @Id
    private long id;

    private String forename;

    private String middlename;

    private String surname;

    private String profilePicture;
}
