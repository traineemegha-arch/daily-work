package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repositories.Order1Repository;

//@Component
@Service
public class NoteService {

	@Autowired
	Order1Repository order1Repository;

	@Autowired
	PaymentService paymentService;

	@Autowired
	EmailService emailService;

	public Iterable<Order1> getOrder() {
		try {
			Thread.sleep(1040);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return order1Repository.findAll();
	}

	// public Integer addOrder(Order1 order1) {
	// @Transactional(rollbackFor=Exception.class,noRollbackFor=
	// {IOException.class}//->for rollback to happen

	@Transactional(rollbackFor = Exception.class) 
	public Integer addOrder(Order1 order1) {
	    for (OrderLine orderLine : order1.getOrderLines()) {
	        orderLine.setOrder1(order1);  
	    }

	    Order1 saved = order1Repository.save(order1);  // Save the entire order, including orderLines due to cascading
	    return saved.getId();  // Return the saved order's ID
	}

	public Optional<Order1> getOrderById(Integer id) {
		return order1Repository.findById(id);
	}

	public void deleteOrderById(Integer id) {
		order1Repository.deleteById(id);
	}
}