package lu.atozdigital.api.service;

import lu.atozdigital.api.model.Order;
import lu.atozdigital.api.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrder(int id) {
        return orderRepository.findById(id)
                .orElse(null);
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(int id, Order orderRequest) {
        Order order = orderRepository.findById(id)
                .orElse(null);
        if(order == null) return null;

        order.setReference(orderRequest.getReference());
        order.setDate(orderRequest.getDate());
        order.setArticles(orderRequest.getArticles());
        return orderRepository.save(order);
    }
}
