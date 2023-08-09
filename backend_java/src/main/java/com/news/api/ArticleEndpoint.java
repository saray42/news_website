package com.news.api;

import com.news.data.ArticleType;
import com.news.data.article.Article;
import com.news.data.article.ArticleRepository;
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

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/type/{articleName}")
    List<Article> getByArticlesName(@PathVariable String articleName) throws ArticleTypeNotFound {
        return articleRepository.findByArticleType_Name(articleName)
                .orElseThrow(ArticleTypeNotFound::new);
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
