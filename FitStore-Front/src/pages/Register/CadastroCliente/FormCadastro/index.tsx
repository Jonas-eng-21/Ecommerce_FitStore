import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerForm, ErrorLabel, InputForm, SelectForm } from "./style";
import ButtonRegister from "../../../../components/ButtonRegister";

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
  senha: string;
  cidade: string;
}

interface FormCadastroProps {
  initialData: FormData;
  onSubmit: (data: FormData) => void;
  fields: Array<keyof FormData>;
}

const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string()
    .required("CPF é obrigatório")
    .matches(/^\d{11}$/, "CPF deve conter 11 números"),
  telefone: Yup.string().required("Telefone é obrigatório"),
  endereco: Yup.string().required("Endereço é obrigatório"),
  numero: Yup.string().required("Número é obrigatório"),
  bairro: Yup.string().required("Bairro é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .required("Senha é obrigatória")
    .min(4, "Senha deve ter pelo menos 4 caracteres"),
  cidade: Yup.string().required("Selecione uma cidade"),
});

const cidades = [
  { id: "1", nome: "São Paulo" },
  { id: "2", nome: "Rio de Janeiro" },
  { id: "3", nome: "Belo Horizonte" },
  { id: "4", nome: "Curitiba" },
];

const FormCadastro: React.FC<FormCadastroProps> = ({
  initialData,
  onSubmit,
  fields,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialData,
    resolver: yupResolver(validationSchema),
  });

  const handleClick = () => {
    console.log("Botão clicado");
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.includes("nome") && (
          <div>
            <label>Nome:</label>
            <InputForm
              type="text"
              {...register("nome")}
              className={errors.nome ? "error" : ""}
            />
            {errors.nome && <ErrorLabel>{errors.nome.message}</ErrorLabel>}
          </div>
        )}
        {fields.includes("cpf") && (
          <div>
            <label>CPF:</label>
            <InputForm
              type="text"
              {...register("cpf")}
              className={errors.cpf ? "error" : ""}
            />
            {errors.cpf && <ErrorLabel>{errors.cpf.message}</ErrorLabel>}
          </div>
        )}
        {fields.includes("telefone") && (
          <div>
            <label>Telefone:</label>
            <InputForm
              type="text"
              {...register("telefone")}
              className={errors.telefone ? "error" : ""}
            />
            {errors.telefone && (
              <ErrorLabel>{errors.telefone.message}</ErrorLabel>
            )}
          </div>
        )}
        {fields.includes("endereco") && (
          <div>
            <label>Endereço:</label>
            <InputForm
              type="text"
              {...register("endereco")}
              className={errors.endereco ? "error" : ""}
            />
            {errors.endereco && (
              <ErrorLabel>{errors.endereco.message}</ErrorLabel>
            )}
          </div>
        )}
        {fields.includes("numero") && (
          <div>
            <label>Número:</label>
            <InputForm
              type="text"
              {...register("numero")}
              className={errors.numero ? "error" : ""}
            />
            {errors.numero && <ErrorLabel>{errors.numero.message}</ErrorLabel>}
          </div>
        )}
        {fields.includes("bairro") && (
          <div>
            <label>Bairro:</label>
            <InputForm
              type="text"
              {...register("bairro")}
              className={errors.bairro ? "error" : ""}
            />
            {errors.bairro && <ErrorLabel>{errors.bairro.message}</ErrorLabel>}
          </div>
        )}
        {fields.includes("email") && (
          <div>
            <label>Email:</label>
            <InputForm
              type="email"
              {...register("email")}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
          </div>
        )}
        {fields.includes("senha") && (
          <div>
            <label>Senha:</label>
            <InputForm
              type="password"
              {...register("senha")}
              className={errors.senha ? "error" : ""}
            />
            {errors.senha && <ErrorLabel>{errors.senha.message}</ErrorLabel>}
          </div>
        )}
        {fields.includes("cidade") && (
          <div>
            <label>Cidade:</label>
            <SelectForm
              {...register("cidade")}
              className={errors.cidade ? "error" : ""}
            >
              <option value="">Selecione uma cidade</option>
              {cidades.map((cidade) => (
                <option key={cidade.id} value={cidade.nome}>
                  {cidade.nome}
                </option>
              ))}
            </SelectForm>
            {errors.cidade && <ErrorLabel>{errors.cidade.message}</ErrorLabel>}
          </div>
        )}
        <ButtonRegister text="Cadastrar" onClick={handleClick} />
      </form>
    </ContainerForm>
  );
};

export default FormCadastro;
