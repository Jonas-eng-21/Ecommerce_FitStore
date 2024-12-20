package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.dto.EntradaDTO;
import br.com.projeto.FitStore.models.*;
import br.com.projeto.FitStore.repository.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/entradas")
public class EntradaController {

    @Autowired
    private EntradaRepositorio entradaRepositorio;
    @Autowired
    private ItemEntradaRepositorio itemEntradaRepositorio;
    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    @GetMapping
    public ResponseEntity<List<EntradaDTO>> listarEntradas() {
        List<Entrada> entradas = entradaRepositorio.findAll();
        List<EntradaDTO> entradaDTOs = entradas.stream()
                .map(EntradaDTO::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(entradaDTOs);
    }

    @PostMapping
    public ResponseEntity<?> cadastrarEntrada(@RequestBody Entrada entrada) {
        if (entrada.getItensEntrada() == null || entrada.getItensEntrada().isEmpty()) {
            return ResponseEntity.badRequest().body("A entrada deve conter pelo menos um item.");
        }

        for (ItemEntrada item : entrada.getItensEntrada()) {
            entrada.setValorTotal(entrada.getValorTotal() + (item.getValor() * item.getQuantidade()));
            entrada.setQuantidadeTotal(entrada.getQuantidadeTotal() + item.getQuantidade());
        }

        Entrada entradaSalva = entradaRepositorio.saveAndFlush(entrada);
        for (ItemEntrada it : entrada.getItensEntrada()) {
            it.setEntrada(entradaSalva);
            itemEntradaRepositorio.saveAndFlush(it);

            Optional<Produto> prod = produtoRepositorio.findById(it.getProduto().getId());
            if (prod.isPresent()) {
                Produto produto = prod.get();
                produto.setEstoque(produto.getEstoque() + it.getQuantidade());
                produto.setPrecoVenda(it.getValor());
                produto.setPrecoCusto(it.getValorCusto());
                produtoRepositorio.saveAndFlush(produto);
            }
        }

        EntradaDTO entradaDTO = new EntradaDTO(entradaSalva);
        return ResponseEntity.status(HttpStatus.CREATED).body(entradaDTO);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> removerEntrada(@PathVariable Long id) {
        if (entradaRepositorio.existsById(id)) {
            entradaRepositorio.deleteById(id);
            return ResponseEntity.ok("Entrada removida com sucesso");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entrada não encontrada");
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<?> removerItemEntrada(@PathVariable Long id) {
        Optional<ItemEntrada> itemEntrada = itemEntradaRepositorio.findById(id);
        if (itemEntrada.isPresent()) {
            itemEntradaRepositorio.delete(itemEntrada.get());
            return ResponseEntity.ok("Item removido com sucesso");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item não encontrado");
    }
}