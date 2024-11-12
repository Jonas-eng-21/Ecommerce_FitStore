import React, { useState } from "react";
import { ButtonForm, ContainerForm, InputForm } from "./style";

interface FormData {
  nome?: string;
  cpf?: string;
  cnpj?: string;
  telefone?: string;
  endereco?: string;
  numero?: string;
  funcao?: string;
  bairro?: string;
  email?: string;
}

interface FormCadastroProps {
  initialData: FormData;
  onSubmit: (data: FormData) => void;
  fields: Array<keyof FormData>; // Lista de campos a serem exibidos
}

const FormCadastro: React.FC<FormCadastroProps> = ({
  initialData,
  onSubmit,
  fields,
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
        {fields.includes("nome") && (
          <div>
            <label>Nome:</label>
            <InputForm
              type="text"
              name="nome"
              value={formData.nome || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("cpf") && (
          <div>
            <label>CPF:</label>
            <InputForm
              type="text"
              name="cpf"
              value={formData.cpf || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("cnpj") && (
          <div>
            <label>CNPJ:</label>
            <InputForm
              type="text"
              name="cnpj"
              value={formData.cnpj || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("telefone") && (
          <div>
            <label>Telefone:</label>
            <InputForm
              type="text"
              name="telefone"
              value={formData.telefone || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("endereco") && (
          <div>
            <label>Endereço:</label>
            <InputForm
              type="text"
              name="endereco"
              value={formData.endereco || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("numero") && (
          <div>
            <label>Número:</label>
            <InputForm
              type="text"
              name="numero"
              value={formData.numero || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("funcao") && (
          <div>
            <label>Função:</label>
            <InputForm
              type="text"
              name="funcao"
              value={formData.funcao || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("bairro") && (
          <div>
            <label>Bairro:</label>
            <InputForm
              type="text"
              name="bairro"
              value={formData.bairro || ""}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("email") && (
          <div>
            <label>Email:</label>
            <InputForm
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
        )}
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>
    </ContainerForm>
  );
};

export default FormCadastro;
