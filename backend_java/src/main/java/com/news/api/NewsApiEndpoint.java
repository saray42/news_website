package com.news.api;

import com.news.api.error.ArticleNotFound;
import com.news.api.error.ArticleTypeNotFound;
import com.news.data.article.Article;
import com.news.data.article.ArticleRepository;
import com.news.data.author.Author;
import com.news.data.author.AuthorRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("newsApi")
public class NewsApiEndpoint {

    private final ArticleRepository articleRepository;

    private final AuthorRepository authorRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public NewsApiEndpoint(ArticleRepository articleRepository, AuthorRepository authorRepository) {
        this.articleRepository = articleRepository;
        this.authorRepository = authorRepository;
    }

    @GetMapping("/articles/all")
    List<Article> getAll() {
        return articleRepository.findAll();
    }

    @GetMapping("/articles/byType/{articleTypeName}")
    List<Article> getByArticlesName(@PathVariable String articleTypeName) throws ArticleTypeNotFound {
        return articleRepository.findByArticleType_Name(articleTypeName)
                .orElseThrow(ArticleTypeNotFound::new);
    }

    @GetMapping("/articles/byId/{articleId}")
    Article getArticleById(@PathVariable long articleId) throws ArticleNotFound {
        return articleRepository.findById(articleId)
                .orElseThrow(ArticleNotFound::new);
    }

    @PostMapping("/createAuthor")
    ResponseEntity<Object> createAuthor(@RequestBody Author newAuthor) {
        if(authorRepository.findByEmail(newAuthor.getEmail()) != null) return ResponseHandler.generateResponse("Email already in use!", HttpStatus.CONFLICT);
        newAuthor.setProfilePicture("http://dummyimage.com/40x40..png/c133ff/000000");
        String encodedPassword = bCryptPasswordEncoder.encode(newAuthor.getPassword());
        newAuthor.setPassword(encodedPassword);
        authorRepository.save(newAuthor);
        return ResponseHandler.generateResponse("Successfully registered!", HttpStatus.CREATED);
    }

    @PostMapping("/newArticle")
    Article create(@RequestBody Article article) {
        return articleRepository.save(article);
    }
}
