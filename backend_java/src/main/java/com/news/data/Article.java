package com.news.data;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class Article {

    @Id
    @GeneratedValue
    private long id;

    private String headline;

    private String byline;

    private String lead;

    private String body;

    private String conclusion;

    private String picture;

    @CreationTimestamp
    private LocalDateTime pointOfCreation;

    private long authorId;

    private ArticleType type;

    public long getId() {
        return id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getByline() {
        return byline;
    }

    public void setByline(String byline) {
        this.byline = byline;
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

    public LocalDateTime getPointOfCreation() {
        return pointOfCreation;
    }

    public void setPointOfCreation(LocalDateTime pointOfCreation) {
        this.pointOfCreation = pointOfCreation;
    }

    public ArticleType getType() {
        return type;
    }

    public void setType(ArticleType type) {
        this.type = type;
    }
}
