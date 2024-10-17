package br.com.projeto.FitStore.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class mainController  {
	
	@GetMapping("/administrativo")
	public String acessarPrincipal() {
		return "administrativo/home" ;
	}

}
