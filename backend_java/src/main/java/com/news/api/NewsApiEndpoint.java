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

    private final ResponseHandler responseHandler;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public NewsApiEndpoint(ArticleRepository articleRepository, AuthorRepository authorRepository, ResponseHandler responseHandler) {
        this.articleRepository = articleRepository;
        this.authorRepository = authorRepository;
        this.responseHandler = responseHandler;
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

    @PostMapping("/signup")
    ResponseEntity<Object> signup(@RequestBody Author author) {
        if(authorRepository.findByEmail(author.getEmail()) != null) return responseHandler.generateResponse("Email already in use!", HttpStatus.CONFLICT, null);
        author.setProfilePicture("http://dummyimage.com/40x40..png/c133ff/000000");
        String encodedPassword = bCryptPasswordEncoder.encode(author.getPassword());
        author.setPassword(encodedPassword);
        authorRepository.save(author);
        return responseHandler.generateResponse("Successfully signed up!", HttpStatus.CREATED, null);
    }

    @PostMapping("/login")
    ResponseEntity<Object> login(@RequestBody Author author) {
        Author foundAuthor = authorRepository.findByEmail(author.getEmail());
        boolean matchedPassword = bCryptPasswordEncoder.matches(author.getPassword(), authorRepository.findByEmail(author.getEmail()).getPassword());
        if(foundAuthor != null || matchedPassword) {
            return responseHandler.generateResponse("Successfully logged in!", HttpStatus.ACCEPTED, foundAuthor.getFirstName());
        }
        return responseHandler.generateResponse("Either email or password is wrong!", HttpStatus.CONFLICT, null);
    }

    @PostMapping("/newArticle")
    Article create(@RequestBody Article article) {
        return articleRepository.save(article);
    }
}
