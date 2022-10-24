package lu.atozdigital.api.service;

import lu.atozdigital.api.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
    Order createOrder(Order order);
    Order updateOrder(int id, Order order);
}
