package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepositorio extends JpaRepository<Venda, Long> {

}
