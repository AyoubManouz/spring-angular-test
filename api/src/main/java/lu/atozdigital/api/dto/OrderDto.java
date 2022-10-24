package lu.atozdigital.api.dto;

import lu.atozdigital.api.model.Article;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderDto {

    private int id;

    private String reference;

    private Date date;

    List<Article> articles = new ArrayList<>();

    public OrderDto() {}

    public OrderDto(int id, String reference, Date date) {
        this.id = id;
        this.reference = reference;
        this.date = date;
    }

    public void addArticle(Article article) {
        this.articles.add(article);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
