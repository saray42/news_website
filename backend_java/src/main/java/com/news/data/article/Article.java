package com.news.data.article;

import com.news.data.ArticleType;
import com.news.data.Author;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String headline;

    private String lead;

    private String body;

    private String conclusion;

    private String picture;

    @CreationTimestamp
    private Instant pointOfCreation;

    @ManyToOne
    private Author author;

    @ManyToOne
    private ArticleType articleType;

    public long getId() {
        return id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getLead() {
        return lead;
    }

    public void setLead(String lead) {
        this.lead = lead;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getConclusion() {
        return conclusion;
    }

    public void setConclusion(String conclusion) {
        this.conclusion = conclusion;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Instant getPointOfCreation() {
        return pointOfCreation;
    }

    public void setPointOfCreation(Instant pointOfCreation) {
        this.pointOfCreation = pointOfCreation;
    }

    public Author getAuthor() {
        return author;
    }

    public ArticleType getArticleType() {
        return articleType;
    }
}
