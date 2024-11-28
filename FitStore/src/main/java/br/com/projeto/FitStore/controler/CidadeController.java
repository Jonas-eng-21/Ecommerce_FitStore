package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Cidade;
import br.com.projeto.FitStore.models.Estado;
import br.com.projeto.FitStore.repository.CidadeRepositorio;
import br.com.projeto.FitStore.repository.EstadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Controller
public class CidadeController {

	@Autowired
	private CidadeRepositorio cidadeRepositorio;

    @Autowired
    private EstadoRepositorio estadoRepositorio;

    @GetMapping("/cidades")
    public List<Cidade> listarCidades() {
        return cidadeRepositorio.findAll();
    }

  
    @GetMapping("/cidade/{id}")
    public Optional<Cidade> obterCidadePorId(@PathVariable Long id) {
        return cidadeRepositorio.findById(id);
    }


    @PostMapping("/cidade")
    public Cidade cadastrarCidade(@RequestBody Cidade cidade) {
        if (cidade.getEstado() != null && cidade.getEstado().getId() != null) {
            // Busca o estado pelo ID, ou lança uma exceção se não for encontrado
            Estado estadoExistente = estadoRepositorio.findById(cidade.getEstado().getId())
                    .orElseThrow(() -> new RuntimeException("Estado não encontrado"));
            cidade.setEstado(estadoExistente); // Define o estado existente
        }
        return cidadeRepositorio.save(cidade);
    }



    @PutMapping("/cidade/{id}")
    public Cidade editarCidade(@PathVariable Long id, @RequestBody Cidade cidadeAtualizado) {
        Optional<Cidade> cidadeExistente = cidadeRepositorio.findById(id);
        if (cidadeExistente.isPresent()) {
            Cidade cidade = cidadeExistente.get();
            cidade.setNome(cidadeAtualizado.getNome());
            return cidadeRepositorio.save(cidade);
        }
        return null;
    }

 
    @DeleteMapping("/cidade/{id}")
    public void removerCidade(@PathVariable Long id) {
        cidadeRepositorio.deleteById(id);
    }
	
}
