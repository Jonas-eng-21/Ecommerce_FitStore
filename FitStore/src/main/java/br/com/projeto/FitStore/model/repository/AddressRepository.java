package br.com.projeto.FitStore.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.projeto.FitStore.model.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
