package br.com.projeto.FitStore.modules.user;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity(name = "users")
public class UserEntity {

    // public enum UserRole {
    //     ADMIN, USER
    // }

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;

    @Email(message = "Email inválido")
    private String email;

    @Pattern(regexp = "^[a-zA-Z0-9]*$", message = "O nome de usuário deve conter apenas letras e números")
    private String username;
    
    @Length(min = 6, message = "A senha deve ter no mínimo 6 caracteres", max = 100)
    private String password;

    @CreationTimestamp
    private LocalDateTime createdAt;

    // @Enumerated(EnumType.STRING)
    // private UserRole role = UserRole.USER;
}
