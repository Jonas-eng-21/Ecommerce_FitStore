package br.com.projeto.FitStore.dto;

import br.com.projeto.FitStore.models.ItemEntrada;

public class ItemEntradaDTO {
    private Long id;
    private Long produtoId;
    private double quantidade;
    private double valor;
    private double valorCusto;

    public ItemEntradaDTO(ItemEntrada item) {
        this.id = item.getId();
        this.produtoId = item.getProduto().getId();
        this.quantidade = item.getQuantidade();
        this.valor = item.getValor();
        this.valorCusto = item.getValorCusto();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProdutoId() {
        return produtoId;
    }

    public void setProdutoId(Long produtoId) {
        this.produtoId = produtoId;
    }

    public double  getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public double getValorCusto() {
        return valorCusto;
    }

    public void setValorCusto(double valorCusto) {
        this.valorCusto = valorCusto;
    }
}
