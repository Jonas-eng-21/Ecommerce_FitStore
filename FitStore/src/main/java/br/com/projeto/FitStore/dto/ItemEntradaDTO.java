package br.com.projeto.FitStore.dto;

import br.com.projeto.FitStore.models.ItemEntrada;

public class ItemEntradaDTO {
    private Long id;
    private Long produtoId;
    private String nomeProduto;
    private String categoriaProduto;
    private String urlImagemProduto;
    private Double precoProduto;
    private double quantidade;
    private double valor;
    private double valorCusto;

    public ItemEntradaDTO(ItemEntrada item) {
        this.id = item.getId();
        this.produtoId = item.getProduto() != null ? item.getProduto().getId() : null;
        this.nomeProduto = item.getProduto() != null ? item.getProduto().getNome() : "";
        this.categoriaProduto = item.getProduto() != null ? item.getProduto().getCategoria() : "";
        this.urlImagemProduto = item.getProduto() != null ? item.getProduto().getUrlImagem() : "";
        this.precoProduto = item.getProduto() != null ? item.getProduto().getPrecoVenda() : 0.0;
        this.quantidade = item.getQuantidade();
        this.valor = item.getValor();
        this.valorCusto = item.getValorCusto();
    }

    // Getters e setters
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

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getCategoriaProduto() {
        return categoriaProduto;
    }

    public void setCategoriaProduto(String categoriaProduto) {
        this.categoriaProduto = categoriaProduto;
    }

    public String getUrlImagemProduto() {
        return urlImagemProduto;
    }

    public void setUrlImagemProduto(String urlImagemProduto) {
        this.urlImagemProduto = urlImagemProduto;
    }

    public Double getPrecoProduto() {
        return precoProduto;
    }

    public void setPrecoProduto(Double precoProduto) {
        this.precoProduto = precoProduto;
    }

    public double getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(double quantidade) {
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
