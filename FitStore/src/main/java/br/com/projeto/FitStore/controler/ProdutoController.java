package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Produto;
import br.com.projeto.FitStore.repository.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Controller
public class ProdutoController {

	@Autowired
	private ProdutoRepositorio produtoRepositorio;

    @GetMapping("/produtos")
    public List<Produto> listarProdutos() {
        return produtoRepositorio.findAll();
    }

  
    @GetMapping("/produto/{id}")
    public Optional<Produto> obterProdutoPorId(@PathVariable Long id) {
        return produtoRepositorio.findById(id);
    }


    @PostMapping("/produto")
    public Produto cadastrarProduto(@RequestBody Produto produto) {
        return produtoRepositorio.save(produto);
    }

  
    @PutMapping("/produto/{id}")
    public Produto editarProduto(@PathVariable Long id, @RequestBody Produto produtoAtualizado) {
        Optional<Produto> produtoExistente = produtoRepositorio.findById(id);
        if (produtoExistente.isPresent()) {
            Produto produto = produtoExistente.get();
            produto.setNome(produtoAtualizado.getNome());
            return produtoRepositorio.save(produto);
        }
        return null;
    }

 
    @DeleteMapping("/produto/{id}")
    public void removerProduto(@PathVariable Long id) {
        produtoRepositorio.deleteById(id);
    }
	
}
