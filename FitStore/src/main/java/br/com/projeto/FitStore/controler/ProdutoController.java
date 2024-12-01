package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Produto;
import br.com.projeto.FitStore.repository.ProdutoRepositorio;
import br.com.projeto.FitStore.service.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class ProdutoController {

	@Autowired
	private ProdutoRepositorio produtoRepositorio;

    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("/produtos")
    public List<Produto> listarProdutos() {
        return produtoRepositorio.findAll();
    }

  
    @GetMapping("/produto/{id}")
    public Optional<Produto> obterProdutoPorId(@PathVariable Long id) {
        return produtoRepositorio.findById(id);
    }


    @PostMapping("/produto")
    public Produto cadastrarProduto(
            @RequestParam("nome") String nome,
            @RequestParam("imagem") MultipartFile file) {
        Produto produto = new Produto();
        produto.setNome(nome);

        try {
            String nomeImagem = "produto_" + nome + "_" + System.currentTimeMillis();
            String urlImagem = cloudinaryService.uploadImagem(file, nomeImagem);

            produto.setUrlImagem(urlImagem);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao fazer upload da imagem", e);
        }

        return produtoRepositorio.save(produto);
    }





    @DeleteMapping("/produto/{id}")
    public void removerProduto(@PathVariable Long id) {
        produtoRepositorio.deleteById(id);
    }
	
}
