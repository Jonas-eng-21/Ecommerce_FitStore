import Navbar from "../../components/NavBar";
import { Container, Footer, ContactForm } from "./style";

export default function Contato() {
  return (
    <Container>
        <Navbar/>
      {/* Formulário de Contato */}
      <ContactForm>
        <h1>Entre em Contato</h1>
        <p>
          Estamos aqui para ajudar! Preencha o formulário abaixo e entraremos em
          contato com você o mais rápido possível. 📬
        </p>
        <form>
          <label>
            Nome Completo:
            <input type="text" placeholder="Digite seu nome" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Digite seu email" required />
          </label>
          <label>
            Mensagem:
            <textarea
              placeholder="Digite sua mensagem"
              rows={5}
              required
            ></textarea>
          </label>
          <button type="submit" className="primary">
            Enviar Mensagem
          </button>
        </form>
      </ContactForm>

      {/* Rodapé */}
      <Footer>
        <p>Obrigado por entrar em contato com a Fit Store! 🚀</p>
      </Footer>
    </Container>
  );
}
