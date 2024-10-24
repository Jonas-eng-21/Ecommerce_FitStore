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

    @Pattern(regexp = "\\S+", message = "O nome de usuário não pode conter espaços")
    private String username;
    
    @Length(min = 6, message = "A senha deve ter entre 6 a 100 caracteres", max = 100)
    private String password;

    @CreationTimestamp
    private LocalDateTime createdAt;

    // @Enumerated(EnumType.STRING)
    // private UserRole role = UserRole.USER;
}
