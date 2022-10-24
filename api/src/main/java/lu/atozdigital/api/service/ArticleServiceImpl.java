package lu.atozdigital.api.service;

import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService{

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public Article getArticleById(int id) {
        return articleRepository.findById(id).orElse(null);
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }
}
