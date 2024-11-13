package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Fornecedor;
import br.com.projeto.FitStore.models.UsuarioAutenticavel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FornecedorRepositorio extends JpaRepository<Fornecedor, Long> {
    Optional<UsuarioAutenticavel> findByEmail(String email);
}
