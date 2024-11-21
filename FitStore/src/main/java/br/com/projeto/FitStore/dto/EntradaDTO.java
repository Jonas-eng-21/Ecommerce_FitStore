package br.com.projeto.FitStore.dto;

import br.com.projeto.FitStore.models.Entrada;
import java.util.List;
import java.util.stream.Collectors;

public class EntradaDTO {
    private Long id;
    private double valorTotal;
    private double quantidadeTotal;
    private List<ItemEntradaDTO> itensEntrada;

    public EntradaDTO(Entrada entrada) {
        this.id = entrada.getId();
        this.valorTotal = entrada.getValorTotal();
        this.quantidadeTotal = entrada.getQuantidadeTotal();
        this.itensEntrada = entrada.getItensEntrada().stream()
                .map(ItemEntradaDTO::new)
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

    public List<ItemEntradaDTO> getItensEntrada() {
        return itensEntrada;
    }

    public void setItensEntrada(List<ItemEntradaDTO> itensEntrada) {
        this.itensEntrada = itensEntrada;
    }
}
