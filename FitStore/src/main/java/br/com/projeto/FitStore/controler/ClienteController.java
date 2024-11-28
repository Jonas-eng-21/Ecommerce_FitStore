package br.com.projeto.FitStore.controler;

import br.com.projeto.FitStore.models.Cidade;
import br.com.projeto.FitStore.models.Cliente;
import br.com.projeto.FitStore.repository.CidadeRepositorio;
import br.com.projeto.FitStore.repository.ClienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ClienteController {

	@Autowired
	private ClienteRepositorio clienteRepositorio;

    @Autowired
    private CidadeRepositorio cidadeRepositorio;

    @GetMapping("/clientes")
    public List<Cliente> listarClientes() {
        List<Cliente> clientes = clienteRepositorio.findAll();
        clientes.forEach(cliente -> cliente.setSenha(null));
        return clientes;
    }


    @GetMapping("/cliente/{id}")
    public Optional<Cliente> obterClientePorId(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteRepositorio.findById(id);
        cliente.ifPresent(c -> c.setSenha(null));
        return cliente;
    }

    @PostMapping("/cliente")
    public Cliente cadastrarCliente(@RequestBody Cliente cliente) {
        if (cliente.getCidade() != null) {
            // Verifica se a cidade possui um ID
            if (cliente.getCidade().getId() != null) {
                // Busca a cidade pelo ID, ou lança uma exceção se não for encontrada
                Cidade cidadeExistente = cidadeRepositorio.findById(cliente.getCidade().getId())
                        .orElseThrow(() -> new RuntimeException("Cidade não encontrada"));

                // Verifica se a cidade associada tem um estado
                if (cidadeExistente.getEstado() == null) {
                    throw new RuntimeException("A cidade associada não possui um estado definido.");
                }
                cliente.setCidade(cidadeExistente); // Define a cidade existente
            } else {
                throw new RuntimeException("O ID da cidade deve ser fornecido.");
            }
        } else {
            throw new RuntimeException("Cidade não fornecida.");
        }

        return clienteRepositorio.save(cliente);
    }




    @PutMapping("/cliente/{id}")
    public Cliente editarCliente(@PathVariable Long id, @RequestBody Cliente clienteAtualizado) {
        Optional<Cliente> clienteExistente = clienteRepositorio.findById(id);
        if (clienteExistente.isPresent()) {
            Cliente cliente = clienteExistente.get();
            cliente.setNome(clienteAtualizado.getNome());
            return clienteRepositorio.save(cliente);
        }
        return null;
    }

 
    @DeleteMapping("/cliente/{id}")
    public void removerCliente(@PathVariable Long id) {
        clienteRepositorio.deleteById(id);
    }
	
}
