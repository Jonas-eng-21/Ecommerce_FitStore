package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.dto.VendaDTO;
import br.com.projeto.FitStore.models.Venda;
import br.com.projeto.FitStore.models.ItemVenda;
import br.com.projeto.FitStore.models.Produto;
import br.com.projeto.FitStore.repository.VendaRepositorio;
import br.com.projeto.FitStore.repository.ItemVendaRepositorio;
import br.com.projeto.FitStore.repository.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/vendas")
public class VendaController {

    @Autowired
    private VendaRepositorio vendaRepositorio;
    @Autowired
    private ItemVendaRepositorio itemVendaRepositorio;
    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    @GetMapping
    public ResponseEntity<List<VendaDTO>> listarVendas() {
        List<Venda> vendas = vendaRepositorio.findAll();
        List<VendaDTO> vendaDTOs = vendas.stream()
                .map(VendaDTO::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(vendaDTOs);
    }

    @PostMapping
    public ResponseEntity<?> cadastrarVenda(@RequestBody Venda venda) {
        if (venda.getItensVenda() == null || venda.getItensVenda().isEmpty()) {
            return ResponseEntity.badRequest().body("A venda deve conter pelo menos um item.");
        }

        // Inicializar totais da venda
        double valorTotal = 0;
        double quantidadeTotal = 0;

        // Processar os itens da venda
        for (ItemVenda item : venda.getItensVenda()) {
            Optional<Produto> prodOptional = produtoRepositorio.findById(item.getProduto().getId());
            if (prodOptional.isEmpty()) {
                return ResponseEntity.badRequest().body("Produto não encontrado para o item da venda.");
            }

            Produto produto = prodOptional.get();

            // Definir valores do item de venda
            item.setValor(produto.getPrecoVenda());
            item.setSubtotal(item.getValor() * item.getQuantidade());
            valorTotal += item.getSubtotal();
            quantidadeTotal += item.getQuantidade();

            // Verificar estoque
            if (produto.getEstoque() < item.getQuantidade()) {
                return ResponseEntity.badRequest().body(
                        String.format("Estoque insuficiente para o produto ID %d.", produto.getId())
                );
            }
        }

        // Atualizar totais na venda
        venda.setValorTotal(valorTotal);
        venda.setQuantidadeTotal(quantidadeTotal);

        // Salvar a venda
        Venda vendaSalva = vendaRepositorio.saveAndFlush(venda);

        // Persistir os itens da venda e atualizar o estoque dos produtos
        for (ItemVenda item : venda.getItensVenda()) {
            item.setVenda(vendaSalva);
            itemVendaRepositorio.saveAndFlush(item);

            Produto produto = produtoRepositorio.findById(item.getProduto().getId()).get();
            produto.setEstoque(produto.getEstoque() - item.getQuantidade());
            produtoRepositorio.saveAndFlush(produto);
        }

        VendaDTO vendaDTO = new VendaDTO(vendaSalva);
        return ResponseEntity.status(HttpStatus.CREATED).body(vendaDTO);
    }
}