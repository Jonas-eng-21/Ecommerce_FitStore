package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepositorio extends JpaRepository<Funcionario, Long> {

}
