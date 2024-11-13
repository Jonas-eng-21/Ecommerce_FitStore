package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.UsuarioAutenticavel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepositorio extends JpaRepository<UsuarioAutenticavel, Long> {
    Optional<UsuarioAutenticavel> findByEmail(String email);
}
