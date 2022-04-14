package com.mutual.moneybox.controller;

import java.util.List;

import com.mutual.moneybox.model.Alcancia;
import com.mutual.moneybox.service.AlcanciaServise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alcancia")
@CrossOrigin
public class AlcanciaController {

    @Autowired
    private AlcanciaServise alcanciaService;

    @PostMapping("/add")
    public String add(@RequestBody Alcancia alcancia){
        alcanciaService.saveAlcancia(alcancia);
        return "se agrego dinero a la alcancia";
    }
    
    @GetMapping("/getAlcancia")
    public List<Alcancia> getAllAlcancia(){
        return alcanciaService.getAllAlcancia();
    }
}
