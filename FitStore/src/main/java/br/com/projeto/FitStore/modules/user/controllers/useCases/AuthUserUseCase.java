package br.com.projeto.FitStore.modules.user.controllers.useCases;

import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import br.com.projeto.FitStore.modules.user.UserRepository;
import br.com.projeto.FitStore.modules.user.dto.AuthUserRequestDTO;
import br.com.projeto.FitStore.modules.user.dto.AuthUserResponseDTO;

@Service
public class AuthUserUseCase {

    @Value("${security.token.secret.user}")
    private String secretKey;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthUserResponseDTO execute(AuthUserRequestDTO authUserRequestDTO) throws AuthenticationException {
        var user = this.userRepository.findByUsername(authUserRequestDTO.username())
                .orElseThrow(() -> {
                    throw new UsernameNotFoundException("Username/password incorrect");
                });
        var passwordMatches = this.passwordEncoder.matches(authUserRequestDTO.password(), user.getPassword());
        if (!passwordMatches) {
            throw new AuthenticationException();
        }
        
        Algorithm algorithm = Algorithm.HMAC256(secretKey);
        var token = JWT.create()
            .withIssuer("FitStore")
            .withSubject(user.getId().toString())
            .withClaim("roles", Arrays.asList("user"))
            .withExpiresAt(Instant.now().plus(Duration.ofMinutes(10)))
            .sign(algorithm);
        
        var authUserResponse = AuthUserResponseDTO.builder()
        .access_token(token)
        .build();

        return authUserResponse;
    }
    
}
