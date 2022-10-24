package lu.atozdigital.api.controller;

import lu.atozdigital.api.dto.ArticleDto;
import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.service.ArticleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private ModelMapper modelMapper;

    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping
    public ResponseEntity<ArticleDto> createArticle(@RequestBody ArticleDto articleDto) {

        // convert DTO to entity
        Article articleRequest = modelMapper.map(articleDto, Article.class);
        Article article = articleService.createArticle(articleRequest);

        // convert entity to DTO
        ArticleDto articleResponse = modelMapper.map(article, ArticleDto.class);
        return new ResponseEntity<ArticleDto>(articleResponse, HttpStatus.CREATED);
    }
}
