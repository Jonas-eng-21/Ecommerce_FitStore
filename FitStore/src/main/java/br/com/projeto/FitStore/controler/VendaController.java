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

        for (ItemVenda item : venda.getItensVenda()) {
            venda.setValorTotal(venda.getValorTotal() + (item.getValor() * item.getQuantidade()));
            venda.setQuantidadeTotal(venda.getQuantidadeTotal() + item.getQuantidade());
        }

        Venda vendaSalva = vendaRepositorio.saveAndFlush(venda);
        for (ItemVenda it : venda.getItensVenda()) {
            it.setVenda(vendaSalva);
            itemVendaRepositorio.saveAndFlush(it);

            Optional<Produto> prod = produtoRepositorio.findById(it.getProduto().getId());
            if (prod.isPresent()) {
                Produto produto = prod.get();
                produto.setEstoque(produto.getEstoque() + it.getQuantidade());
                produto.setPrecoVenda(it.getValor());
                produto.setPrecoCusto(it.getSubtotal());
                produtoRepositorio.saveAndFlush(produto);
            }
        }

        VendaDTO vendaDTO = new VendaDTO(vendaSalva);
        return ResponseEntity.status(HttpStatus.CREATED).body(vendaDTO);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> removerVenda(@PathVariable Long id) {
        if (vendaRepositorio.existsById(id)) {
            vendaRepositorio.deleteById(id);
            return ResponseEntity.ok("Venda removida com sucesso");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Venda não encontrada");
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<?> removerItemVenda(@PathVariable Long id) {
        Optional<ItemVenda> itemVenda = itemVendaRepositorio.findById(id);
        if (itemVenda.isPresent()) {
            itemVendaRepositorio.delete(itemVenda.get());
            return ResponseEntity.ok("Item removido com sucesso");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item não encontrado");
    }
}