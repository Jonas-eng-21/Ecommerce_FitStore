package br.com.projeto.FitStore.repository;

import br.com.projeto.FitStore.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {

}
