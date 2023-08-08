package com.news.data;

import com.news.data.article.Article;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "article_type")
public class ArticleType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String type;

    public long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
