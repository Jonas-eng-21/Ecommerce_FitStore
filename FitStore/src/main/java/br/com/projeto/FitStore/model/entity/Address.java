package br.com.projeto.FitStore.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "addresses") // Nome da tabela no banco de dados
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Geração automática do ID
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false) // Define o relacionamento com a entidade User
    @JoinColumn(name = "user_id", nullable = false) // Define a chave estrangeira
    private User user;

    @Column(name = "street", length = 255) // Nome da rua (pode ser nulo)
    private String street;

    @Column(name = "city", nullable = false, length = 100) // Cidade (não nulo)
    private String city;

    @Column(name = "state", nullable = false, length = 100) // Estado (não nulo)
    private String state;

    @Column(name = "postal_code", nullable = false, length = 20) // Código postal (não nulo)
    private String postalCode;

    @Column(name = "country", nullable = false, length = 100) // País (não nulo)
    private String country;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}

