package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Cliente;
import br.com.projeto.FitStore.models.UsuarioAutenticavel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {
    Optional<UsuarioAutenticavel> findByEmail(String email);
}
