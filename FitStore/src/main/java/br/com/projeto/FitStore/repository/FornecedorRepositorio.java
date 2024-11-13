package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FornecedorRepositorio extends JpaRepository<Fornecedor, Long> {

    Optional<Object> findByEmail(String email);
}
