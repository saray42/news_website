package com.news.data;

import jakarta.persistence.*;

@Entity
@Table(name = "article_type")
public class ArticleType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String type) {
        this.name = type;
    }

}
