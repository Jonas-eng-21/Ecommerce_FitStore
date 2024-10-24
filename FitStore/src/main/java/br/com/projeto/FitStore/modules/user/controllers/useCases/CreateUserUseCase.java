package br.com.projeto.FitStore.modules.user.controllers.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.projeto.FitStore.modules.user.UserEntity;
import br.com.projeto.FitStore.modules.user.UserRepository;

@Service
public class CreateUserUseCase {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserEntity execute(UserEntity userEntity) {
        this.userRepository
        .findByUsernameOrEmail(userEntity.getUsername(), userEntity.getEmail())
            .ifPresent(user -> {
                throw new RuntimeException("Usuário já cadastrado");
            });
        
        var password = passwordEncoder.encode(userEntity.getPassword());
        userEntity.setPassword(password);

        

        return this.userRepository.save(userEntity);
    }
    
}
