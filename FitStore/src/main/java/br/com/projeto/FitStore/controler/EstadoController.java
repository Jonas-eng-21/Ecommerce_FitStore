package br.com.projeto.FitStore.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import br.com.projeto.FitStore.models.Estado;
import br.com.projeto.FitStore.repository.EstadoRepositório;

@Controller
public class EstadoController {

	@Autowired
	private EstadoRepositório estadoRepositório;
	
	@GetMapping("/cadastroEstado")
	public ModelAndView cadastrar(Estado estado) {
		ModelAndView mv = new ModelAndView("/administrativo/estados/cadastro");
		mv.addObject("estado", estado);
		return mv;
	}
	
}
