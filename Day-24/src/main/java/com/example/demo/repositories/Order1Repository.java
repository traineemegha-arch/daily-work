package com.example.demo.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Order1;

@Repository
public interface Order1Repository extends CrudRepository<Order1,Integer> {

}
