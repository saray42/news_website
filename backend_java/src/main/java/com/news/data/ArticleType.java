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

    @ManyToMany
    @JoinTable(
            schema = "article_article_type",
            name = "article_article_type",
            joinColumns = @JoinColumn(name = "article_id"),
            inverseJoinColumns = @JoinColumn(name = "article_type_id"))
    Set<Article> articles;

    public long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Set<Article> getArticles() {
        return articles;
    }

    public void setArticles(Set<Article> articles) {
        this.articles = articles;
    }
}
