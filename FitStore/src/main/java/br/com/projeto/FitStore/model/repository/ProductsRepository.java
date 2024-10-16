package br.com.projeto.FitStore.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.projeto.FitStore.model.entity.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

}