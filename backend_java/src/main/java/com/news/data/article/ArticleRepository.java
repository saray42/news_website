package com.news.data.article;

import com.news.data.ArticleType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    Optional<List<Article>> findByArticleType_Name(String articleTypeName);
}
