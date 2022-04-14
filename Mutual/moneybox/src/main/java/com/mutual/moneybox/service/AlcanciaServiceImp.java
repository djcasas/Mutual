package com.mutual.moneybox.service;

import java.util.List;

import com.mutual.moneybox.model.Alcancia;
import com.mutual.moneybox.repository.AlcanciaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service ("AlcanciaServise")
public class AlcanciaServiceImp implements AlcanciaServise {

    @Autowired
    private AlcanciaRepository alcanciaRepository;

    @Override
    public Alcancia saveAlcancia(Alcancia alcancia){
        return alcanciaRepository.save(alcancia);
    }

    @Override
    public List<Alcancia> getAllAlcancia(){
        return alcanciaRepository.findAll();
    }
    
}
