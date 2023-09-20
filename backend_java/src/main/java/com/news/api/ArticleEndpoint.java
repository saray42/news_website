package com.news.api;

import com.news.data.article.Article;
import com.news.data.article.ArticleRepository;
import com.news.data.author.Author;
import com.news.data.author.AuthorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("articles")
public class ArticleEndpoint {

    private final ArticleRepository articleRepository;

    private final AuthorRepository authorRepository;

    public ArticleEndpoint(ArticleRepository articleRepository, AuthorRepository authorRepository) {
        this.articleRepository = articleRepository;
        this.authorRepository = authorRepository;
    }

    @GetMapping
    List<Article> getAll() {
        return articleRepository.findAll();
    }

    @GetMapping("/type/{articleName}")
    List<Article> getByArticlesName(@PathVariable String articleName) throws ArticleTypeNotFound {
        return articleRepository.findByArticleType_Name(articleName)
                .orElseThrow(ArticleTypeNotFound::new);
    }

    @GetMapping("/article/{articleId}")
    Article getArticleById(@PathVariable long articleId) throws ArticleNotFound {
        return articleRepository.findById(articleId)
                .orElseThrow(ArticleNotFound::new);
    }

    @PostMapping("/createAuthor")
    ResponseEntity<String> createAuthor(@RequestBody Author newAuthor) {
        if(authorRepository.findByEmail(newAuthor.getEmail()) != null) return ResponseEntity.badRequest().body("email_already_in_use!");
        newAuthor.setProfilePicture("http://dummyimage.com/40x40..png/c133ff/000000");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newAuthor.getPassword());
        newAuthor.setPassword(encodedPassword);
        authorRepository.save(newAuthor);
        return ResponseEntity.ok("registered_successfull!");
    }

    @PostMapping
    Article create(@RequestBody Article article) {
        return articleRepository.save(article);
    }
}
