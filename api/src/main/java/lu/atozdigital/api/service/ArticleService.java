package lu.atozdigital.api.service;

import lu.atozdigital.api.model.Article;

import java.util.List;

public interface ArticleService {
    Article createArticle(Article article);
    Article getArticleById(int id);
    List<Article> getAllArticles();
}
