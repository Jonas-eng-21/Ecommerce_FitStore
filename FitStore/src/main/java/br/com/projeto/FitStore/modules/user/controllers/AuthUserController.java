package br.com.projeto.FitStore.modules.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.FitStore.modules.user.controllers.useCases.AuthUserUseCase;
import br.com.projeto.FitStore.modules.user.dto.AuthUserRequestDTO;

@RestController
@RequestMapping("/user")
public class AuthUserController {

    @Autowired
    private AuthUserUseCase authUserUseCase;

    @PostMapping("/auth")
    public ResponseEntity<Object> auth(@RequestBody AuthUserRequestDTO authUserRequestDTO) {
      try {
        var token = this.authUserUseCase.execute(authUserRequestDTO);
        return ResponseEntity.ok(token);
      } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
      }  
    }
    
}
