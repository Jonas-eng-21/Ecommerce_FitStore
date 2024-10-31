package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Cidade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CidadeRepositorio extends JpaRepository<Cidade, Long> {

}
