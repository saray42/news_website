package com.news.api;

import com.news.data.Article;
import com.news.data.ArticleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("articles")
public class ArticleEndpoint {

    private final ArticleRepository articleRepository;

    public ArticleEndpoint(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping
    List<Article> getAll() {
        return articleRepository.findAll();
    }

    List<Article> getByType() {
        return null;
    }

    List<Article> getByDate() {
        return null;
    }

    List<Article> getByAuthor() {
        return null;
    }

    @PostMapping
    Article create(@RequestBody Article article) {
        return articleRepository.save(article);
    }
}
