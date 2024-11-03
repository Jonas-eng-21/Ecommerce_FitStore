package br.com.projeto.FitStore.models;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Entrada implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String obs;
	private Double valorTotal = 0.00;
	private Double quantidadeTotal = 0.00;
	private Date dataEntrada = new Date();
	@ManyToOne
	private Fornecedor fornecedor;
	@ManyToOne
	private Funcionario funcionario;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getObs() {
		return obs;
	}
	public void setObs(String obs) {
		this.obs = obs;
	}
	public Double getValorTotal() {
		return valorTotal;
	}
	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}
	public Double getQuantidadeTotal() {
		return quantidadeTotal;
	}
	public void setQuantidadeTotal(Double quantidadeTotal) {
		this.quantidadeTotal = quantidadeTotal;
	}
	public Date getDataEntrada() {
		return dataEntrada;
	}
	public void setDataEntrada(Date dataEntrada) {
		this.dataEntrada = dataEntrada;
	}
	public Fornecedor getFornecedor() {
		return fornecedor;
	}
	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}
	public Funcionario getFuncionario() {
		return funcionario;
	}
	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@OneToMany(mappedBy = "entrada", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ItemEntrada> itensEntrada = new ArrayList<>();

	public List<ItemEntrada> getItensEntrada() {
		return itensEntrada;
	}

	public void setItensEntrada(List<ItemEntrada> itensEntrada) {
		this.itensEntrada = itensEntrada;
	}

}
