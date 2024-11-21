package br.com.projeto.FitStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    public static class LoginRequest {
        public String email;
        public String senha;
    }

    @PostMapping("/login/cliente")
    public ResponseEntity<String> loginCliente(@RequestBody LoginRequest loginRequest) {
        String token = authService.loginCliente(loginRequest.email, loginRequest.senha);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login/funcionario")
    public ResponseEntity<String> loginFuncionario(@RequestBody LoginRequest loginRequest) {
        String token = authService.loginFuncionario(loginRequest.email, loginRequest.senha);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login/fornecedor")
    public ResponseEntity<String> loginFornecedor(@RequestBody LoginRequest loginRequest) {
        String token = authService.loginFornecedor(loginRequest.email, loginRequest.senha);
        return ResponseEntity.ok(token);
    }
}
