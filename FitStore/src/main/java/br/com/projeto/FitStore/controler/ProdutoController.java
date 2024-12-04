package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.dto.ProdutoDTO;
import br.com.projeto.FitStore.models.Produto;
import br.com.projeto.FitStore.repository.ProdutoRepositorio;
import br.com.projeto.FitStore.service.CloudinaryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

	@Autowired
	private ProdutoRepositorio produtoRepositorio;

    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("/listarProdutos")
    public List<Produto> listarProdutos() {
        return produtoRepositorio.findAll();
    }

  
    @GetMapping("/listarProdutos/{id}")
    public Optional<Produto> obterProdutoPorId(@PathVariable Long id) {
        return produtoRepositorio.findById(id);
    }


    @PostMapping(consumes = "multipart/form-data")
    public Produto cadastrarProduto(
            @RequestPart("produto") String produtoJSON,
            @RequestPart("imagem") MultipartFile file) {

        ObjectMapper objectMapper = new ObjectMapper();
        ProdutoDTO produtoDTO;

        try {
            produtoDTO = objectMapper.readValue(produtoJSON, ProdutoDTO.class);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao converter JSON para ProdutoDTO", e);
        }

        Produto produto = new Produto();
        produto.setCategoria(produtoDTO.getCategoria());
        produto.setNome(produtoDTO.getNome());
        produto.setCodigoBarras(produtoDTO.getCodigoBarras());
        produto.setUnidadeMedida(produtoDTO.getUnidadeMedida());
        produto.setEstoque(produtoDTO.getEstoque());
        produto.setPrecoCusto(produtoDTO.getPrecoCusto());
        produto.setPrecoVenda(produtoDTO.getPrecoVenda());
        produto.setLucro(produtoDTO.getLucro());
        produto.setMargemLucro(produtoDTO.getMargemLucro());

        try {
            String nomeImagem = "produto_" + produtoDTO.getNome() + "_" + System.currentTimeMillis();
            String urlImagem = cloudinaryService.uploadImagem(file, nomeImagem);

            produto.setUrlImagem(urlImagem);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao fazer upload da imagem", e);
        }

        return produtoRepositorio.save(produto);
    }


    @DeleteMapping("/excluirProduto/{id}")
    public void removerProduto(@PathVariable Long id) {
        produtoRepositorio.deleteById(id);
    }
	
}
