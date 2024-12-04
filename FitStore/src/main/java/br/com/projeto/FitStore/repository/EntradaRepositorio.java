package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Entrada;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EntradaRepositorio extends JpaRepository<Entrada, Long> {
    @Override
    @EntityGraph(attributePaths = {"itensEntrada.produto"})
    List<Entrada> findAll();
}
