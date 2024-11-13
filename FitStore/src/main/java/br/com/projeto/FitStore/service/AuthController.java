package br.com.projeto.FitStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login/cliente")
    public ResponseEntity<String> loginCliente(@RequestParam String email, @RequestParam String senha) {
        String token = authService.loginCliente(email, senha);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login/funcionario")
    public ResponseEntity<String> loginFuncionario(@RequestParam String email, @RequestParam String senha) {
        String token = authService.loginFuncionario(email, senha);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login/fornecedor")
    public ResponseEntity<String> loginFornecedor(@RequestParam String email, @RequestParam String senha) {
        String token = authService.loginFornecedor(email, senha);
        return ResponseEntity.ok(token);
    }
}
