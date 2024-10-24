package br.com.projeto.FitStore.modules.user.dto;

public record AuthUserRequestDTO (String username, String password) {

    public Object execute(AuthUserRequestDTO authUserRequestDTO) {
        throw new UnsupportedOperationException("Unimplemented method 'execute'");
    }

    
}
