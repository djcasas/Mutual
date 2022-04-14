package com.mutual.moneybox.repository;

import com.mutual.moneybox.model.Alcancia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlcanciaRepository extends JpaRepository<Alcancia,Integer> {
    
}
