package br.com.projeto.FitStore.dto;

import br.com.projeto.FitStore.models.Venda;

import java.util.List;
import java.util.stream.Collectors;

public class VendaDTO {
    private Long id;
    private double valorTotal;
    private double quantidadeTotal;
    private List<ItemVendaDTO> itensVenda;

    public VendaDTO(Venda venda) {
        this.id = venda.getId();
        this.valorTotal = venda.getValorTotal();
        this.quantidadeTotal = venda.getQuantidadeTotal();
        this.itensVenda = venda.getItensVenda().stream()
                .map(ItemVendaDTO::new)
                .collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public double getQuantidadeTotal() {
        return quantidadeTotal;
    }

    public void setQuantidadeTotal(int quantidadeTotal) {
        this.quantidadeTotal = quantidadeTotal;
    }

    public List<ItemVendaDTO> getItensVenda() {
        return itensVenda;
    }

    public void setItensVenda(List<ItemVendaDTO> itensVenda) {
        this.itensVenda = itensVenda;
    }
}
