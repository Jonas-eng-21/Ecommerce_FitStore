package br.com.projeto.FitStore.controler;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import br.com.projeto.FitStore.models.Estado;
import br.com.projeto.FitStore.repository.EstadoRepositorio;

@RestController
@Controller
public class EstadoController {

	@Autowired
	private EstadoRepositorio estadoRepositorio;

    @GetMapping("/estados")
    public List<Estado> listarEstados() {
        return estadoRepositorio.findAll();
    }

  
    @GetMapping("/estado/{id}")
    public Optional<Estado> obterEstadoPorId(@PathVariable Long id) {
        return estadoRepositorio.findById(id);
    }


    @PostMapping("/estado")
    public Estado cadastrarEstado(@RequestBody Estado estado) {
        return estadoRepositorio.save(estado);
    }

  
    @PutMapping("/estado/{id}")
    public Estado editarEstado(@PathVariable Long id, @RequestBody Estado estadoAtualizado) {
        Optional<Estado> estadoExistente = estadoRepositorio.findById(id);
        if (estadoExistente.isPresent()) {
            Estado estado = estadoExistente.get();
            estado.setNome(estadoAtualizado.getNome());
            estado.setSigla(estadoAtualizado.getSigla());
            return estadoRepositorio.save(estado); 
        }
        return null;
    }

 
    @DeleteMapping("/estado/{id}")
    public void removerEstado(@PathVariable Long id) {
        estadoRepositorio.deleteById(id);
    }
	
}
