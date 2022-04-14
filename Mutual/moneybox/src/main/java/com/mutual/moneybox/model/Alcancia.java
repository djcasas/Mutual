package com.mutual.moneybox.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table(name = "Alcancia")
public class Alcancia {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    
    private int id;
    private int cincuenta;
    private int cien;
    private int docientos;
    private int quinientos;
    private int mil;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCincuenta() {
        return this.cincuenta;
    }

    public void setCincuenta(int cincuenta) {
        this.cincuenta = cincuenta;
    }

    public int getCien() {
        return this.cien;
    }

    public void setCien(int cien) {
        this.cien = cien;
    }

    public int getDocientos() {
        return this.docientos;
    }

    public void setDocientos(int docientos) {
        this.docientos = docientos;
    }

    public int getQuinientos() {
        return this.quinientos;
    }

    public void setQuinientos(int quinientos) {
        this.quinientos = quinientos;
    }

    public int getMil() {
        return this.mil;
    }

    public void setMil(int mil) {
        this.mil = mil;
    }


}
