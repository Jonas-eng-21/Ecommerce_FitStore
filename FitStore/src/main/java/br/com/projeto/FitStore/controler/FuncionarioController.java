package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Funcionario;
import br.com.projeto.FitStore.models.Cidade;
import br.com.projeto.FitStore.repository.CidadeRepositorio;
import br.com.projeto.FitStore.repository.FuncionarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Controller
public class FuncionarioController {

	@Autowired
	private FuncionarioRepositorio funcionarioRepositorio;

    @Autowired
    private CidadeRepositorio cidadeRepositorio;

    @GetMapping("/funcionarios")
    public List<Funcionario> listarFuncionarios() {
        return funcionarioRepositorio.findAll();
    }

  
    @GetMapping("/funcionario/{id}")
    public Optional<Funcionario> obterFuncionarioPorId(@PathVariable Long id) {
        return funcionarioRepositorio.findById(id);
    }


    @PostMapping("/funcionario")
    public Funcionario cadastrarFuncionario(@RequestBody Funcionario funcionario) {
        if (funcionario.getCidade() != null && funcionario.getCidade().getId() != null) {
            // Busca o cidade pelo ID, ou lança uma exceção se não for encontrado
            Cidade cidadeExistente = cidadeRepositorio.findById(funcionario.getCidade().getId())
                    .orElseThrow(() -> new RuntimeException("Cidade não encontrado"));
            funcionario.setCidade(cidadeExistente); // Define o cidade existente
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
