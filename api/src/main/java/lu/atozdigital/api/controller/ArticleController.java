package lu.atozdigital.api.controller;

import lu.atozdigital.api.dto.ArticleDto;
import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.service.ArticleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping
    public List<ArticleDto> getAllArticles() {
        return articleService.getAllArticles().stream()
                .map(article -> modelMapper.map(article, ArticleDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleDto> getArticleById(@PathVariable(name="id") int id) {
        Article article = articleService.getArticleById(id);

        if (article == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);

        // convert entity to DTO
        ArticleDto articledto = modelMapper.map(article, ArticleDto.class);

        return ResponseEntity.ok().body(articledto);
    }
}
