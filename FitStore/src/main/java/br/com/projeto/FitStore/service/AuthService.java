package br.com.projeto.FitStore.service;

import br.com.projeto.FitStore.models.Cliente;
import br.com.projeto.FitStore.models.Fornecedor;
import br.com.projeto.FitStore.models.Funcionario;
import br.com.projeto.FitStore.models.UsuarioAutenticavel;
import br.com.projeto.FitStore.repository.ClienteRepositorio;
import br.com.projeto.FitStore.repository.FornecedorRepositorio;
import br.com.projeto.FitStore.repository.FuncionarioRepositorio;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AuthService {

    private final String JWT_SECRET = "seuSegredoSeguro";
    private final long JWT_EXPIRATION = 86400000; // 24 horas

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;

    @Autowired
    private FornecedorRepositorio fornecedorRepositorio;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public String loginCliente(String email, String senha) {
        Cliente cliente = clienteRepositorio.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return autenticarUsuario(cliente, senha);
    }

    public String loginFuncionario(String email, String senha) {
        Funcionario funcionario = funcionarioRepositorio.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return autenticarUsuario(funcionario, senha);
    }

    public String loginFornecedor(String email, String senha) {
        Fornecedor fornecedor = fornecedorRepositorio.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return autenticarUsuario(fornecedor, senha);
    }

    private String autenticarUsuario(UsuarioAutenticavel usuario, String senha) {
        if (!passwordEncoder.matches(senha, usuario.getSenha())) {
            throw new RuntimeException("Senha inválida");
        }
        return gerarToken(usuario);
    }

    private String gerarToken(UsuarioAutenticavel usuario) {
        return Jwts.builder()
                .setSubject(usuario.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }
}
