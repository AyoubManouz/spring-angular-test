package lu.atozdigital.api.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderDto {

    private int id;

    private String reference;

    private Date date;

    List<ArticleDto> articles = new ArrayList<>();

    public OrderDto() {}

    public OrderDto(int id, String reference, Date date) {
        this.id = id;
        this.reference = reference;
        this.date = date;
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

    public List<ArticleDto> getArticles() {
        return articles;
    }

    public void setArticles(List<ArticleDto> articles) {
        this.articles = articles;
    }
}
