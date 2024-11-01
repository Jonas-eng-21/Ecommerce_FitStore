package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Cidade;
import br.com.projeto.FitStore.models.Fornecedor;
import br.com.projeto.FitStore.repository.CidadeRepositorio;
import br.com.projeto.FitStore.repository.FornecedorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FornecedorController {

	@Autowired
	private FornecedorRepositorio fornecedorRepositorio;

    @Autowired
    private CidadeRepositorio cidadeRepositorio;

    @GetMapping("/fornecedors")
    public List<Fornecedor> listarFornecedors() {
        return fornecedorRepositorio.findAll();
    }

  
    @GetMapping("/fornecedor/{id}")
    public Optional<Fornecedor> obterFornecedorPorId(@PathVariable Long id) {
        return fornecedorRepositorio.findById(id);
    }


    @PostMapping("/fornecedor")
    public Fornecedor cadastrarFornecedor(@RequestBody Fornecedor fornecedor) {
        if (fornecedor.getCidade() != null) {
            // Verifica se a cidade possui um ID
            if (fornecedor.getCidade().getId() != null) {
                // Busca a cidade pelo ID, ou lança uma exceção se não for encontrada
                Cidade cidadeExistente = cidadeRepositorio.findById(fornecedor.getCidade().getId())
                        .orElseThrow(() -> new RuntimeException("Cidade não encontrada"));

                // Verifica se a cidade associada tem um estado
                if (cidadeExistente.getEstado() == null) {
                    throw new RuntimeException("A cidade associada não possui um estado definido.");
                }
                fornecedor.setCidade(cidadeExistente); // Define a cidade existente
            } else {
                throw new RuntimeException("O ID da cidade deve ser fornecido.");
            }
        } else {
            throw new RuntimeException("Cidade não fornecida.");
        }

        return fornecedorRepositorio.save(fornecedor);
    }




    @PutMapping("/fornecedor/{id}")
    public Fornecedor editarFornecedor(@PathVariable Long id, @RequestBody Fornecedor fornecedorAtualizado) {
        Optional<Fornecedor> fornecedorExistente = fornecedorRepositorio.findById(id);
        if (fornecedorExistente.isPresent()) {
            Fornecedor fornecedor = fornecedorExistente.get();
            fornecedor.setNome(fornecedorAtualizado.getNome());
            return fornecedorRepositorio.save(fornecedor);
        }
        return null;
    }

 
    @DeleteMapping("/fornecedor/{id}")
    public void removerFornecedor(@PathVariable Long id) {
        fornecedorRepositorio.deleteById(id);
    }
	
}
