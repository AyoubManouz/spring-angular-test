package lu.atozdigital.api.controller;

import lu.atozdigital.api.dto.ArticleDto;
import lu.atozdigital.api.dto.OrderDto;
import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.model.Order;
import lu.atozdigital.api.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private ModelMapper modelMapper;

    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<OrderDto> getAllOrders() {
        return orderService.getAllOrders().stream()
                .map(order -> modelMapper.map(order, OrderDto.class))
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto) {

        // convert DTO to entity
        Order orderRequest = modelMapper.map(orderDto, Order.class);
        Order order = orderService.createOrder(orderRequest);

        // convert entity to DTO
        OrderDto orderResponse = modelMapper.map(order, OrderDto.class);
        return new ResponseEntity<OrderDto>(orderResponse, HttpStatus.CREATED);
    }
}
