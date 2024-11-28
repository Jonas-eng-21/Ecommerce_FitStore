import React, { useState } from "react";
import { ButtonForm, ContainerForm, InputForm } from "./style";

interface FormData {
  email: string;
  senha: string;
}

interface FormLoginProps {
  initialData: FormData;
  onSubmit: (data: FormData) => void;
  fields: Array<keyof FormData>;
}

const FormLogin: React.FC<FormLoginProps> = ({
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
        {fields.includes("senha") && (
          <div>
            <label>Senha:</label>
            <InputForm
              type="senha"
              name="senha"
              value={formData.senha || ""}
              onChange={handleChange}
            />
          </div>
        )}
        <ButtonForm type="submit">Logar</ButtonForm>
      </form>
    </ContainerForm>
  );
};

export default FormLogin;
