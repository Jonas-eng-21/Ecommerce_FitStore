package br.com.projeto.FitStore.modules.user.controllers.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projeto.FitStore.modules.user.UserEntity;
import br.com.projeto.FitStore.modules.user.UserRepository;

@Service
public class CreateUserUseCase {
@Autowired
    private UserRepository userRepository;
    public UserEntity execute(UserEntity userEntity) {
        this.userRepository.findByUsernameOrEmail(userEntity.getUsername(), userEntity.getEmail())
            .ifPresent(user -> {
                throw new RuntimeException("Usuário já cadastrado");
            });
        return this.userRepository.save(userEntity);
    }
    
}
