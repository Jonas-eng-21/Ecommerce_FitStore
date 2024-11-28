import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  fields: Array<keyof FormData>;
}

const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string().when("cnpj", {
    is: (cnpj: string | undefined) => !cnpj || cnpj.length === 0,
    then: Yup.string().required("CPF é obrigatório quando CNPJ está vazio"),
  }),
  cnpj: Yup.string().when("cpf", {
    is: (cpf: string | undefined) => !cpf || cpf.length === 0,
    then: Yup.string().required("CNPJ é obrigatório quando CPF está vazio"),
  }),
  telefone: Yup.string().required("Telefone é obrigatório"),
  endereco: Yup.string().required("Endereço é obrigatório"),
  numero: Yup.string().required("Número é obrigatório"),
  bairro: Yup.string().required("Bairro é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
});

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
            {errors.nome && <p>{errors.nome.message}</p>}
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
            {errors.cpf && <p>{errors.cpf.message}</p>}
          </div>
        )}
        {fields.includes("cnpj") && (
          <div>
            <label>CNPJ:</label>
            <InputForm
              type="text"
              {...register("cnpj")}
              className={errors.cnpj ? "error" : ""}
            />
            {errors.cnpj && <p>{errors.cnpj.message}</p>}
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
            {errors.telefone && <p>{errors.telefone.message}</p>}
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
            {errors.endereco && <p>{errors.endereco.message}</p>}
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
            {errors.numero && <p>{errors.numero.message}</p>}
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
            {errors.bairro && <p>{errors.bairro.message}</p>}
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
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        )}
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>
    </ContainerForm>
  );
};

export default FormCadastro;
