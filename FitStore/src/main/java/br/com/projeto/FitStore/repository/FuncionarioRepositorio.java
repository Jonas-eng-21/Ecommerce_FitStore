package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FuncionarioRepositorio extends JpaRepository<Funcionario, Long> {

    Optional<Object> findByEmail(String email);
}
