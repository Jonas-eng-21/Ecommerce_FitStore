import React, { useState } from "react";
import { ButtonForm, ContainerForm, InputForm } from "./style";

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
}

interface FormCadastroProps {
  initialData: FormData;
  onSubmit: (data: FormData) => void;
}

const FormCadastro: React.FC<FormCadastroProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <InputForm
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <InputForm
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <InputForm
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <InputForm
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número:</label>
          <InputForm
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bairro:</label>
          <InputForm
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <InputForm
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>
    </ContainerForm>
  );
};

export default FormCadastro;
