package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Funcionario;
import br.com.projeto.FitStore.models.Cidade;
import br.com.projeto.FitStore.repository.CidadeRepositorio;
import br.com.projeto.FitStore.repository.FuncionarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FuncionarioController {

	@Autowired
	private FuncionarioRepositorio funcionarioRepositorio;

    @Autowired
    private CidadeRepositorio cidadeRepositorio;

    @GetMapping("/funcionarios")
    public List<Funcionario> listarFuncionarios() {
        List<Funcionario> funcionarios = funcionarioRepositorio.findAll();
        funcionarios.forEach(funcionario -> funcionario.setSenha(null));
        return funcionarios;
    }

    @GetMapping("/funcionario/{id}")
    public Optional<Funcionario> obterFuncionarioPorId(@PathVariable Long id) {
        Optional<Funcionario> funcionario = funcionarioRepositorio.findById(id);
        funcionario.ifPresent(f -> f.setSenha(null));
        return funcionario;
    }


    @PostMapping("/funcionario")
    public Funcionario cadastrarFuncionario(@RequestBody Funcionario funcionario) {
        if (funcionario.getCidade() != null) {
            // Verifica se a cidade possui um ID
            if (funcionario.getCidade().getId() != null) {
                // Busca a cidade pelo ID, ou lança uma exceção se não for encontrada
                Cidade cidadeExistente = cidadeRepositorio.findById(funcionario.getCidade().getId())
                        .orElseThrow(() -> new RuntimeException("Cidade não encontrada"));

                // Verifica se a cidade associada tem um estado
                if (cidadeExistente.getEstado() == null) {
                    throw new RuntimeException("A cidade associada não possui um estado definido.");
                }
                funcionario.setCidade(cidadeExistente); // Define a cidade existente
            } else {
                throw new RuntimeException("O ID da cidade deve ser fornecido.");
            }
        } else {
            throw new RuntimeException("Cidade não fornecida.");
        }

        return funcionarioRepositorio.save(funcionario);
    }




    @PutMapping("/funcionario/{id}")
    public Funcionario editarFuncionario(@PathVariable Long id, @RequestBody Funcionario funcionarioAtualizado) {
        Optional<Funcionario> funcionarioExistente = funcionarioRepositorio.findById(id);
        if (funcionarioExistente.isPresent()) {
            Funcionario funcionario = funcionarioExistente.get();
            funcionario.setNome(funcionarioAtualizado.getNome());
            return funcionarioRepositorio.save(funcionario);
        }
        return null;
    }

 
    @DeleteMapping("/funcionario/{id}")
    public void removerFuncionario(@PathVariable Long id) {
        funcionarioRepositorio.deleteById(id);
    }
	
}
