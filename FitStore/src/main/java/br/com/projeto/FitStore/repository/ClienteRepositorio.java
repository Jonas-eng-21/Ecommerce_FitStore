package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {

}
