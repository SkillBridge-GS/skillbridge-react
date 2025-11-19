import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/Formulario/FormContainer";
import type { IUsuario } from "../../types/tipoUsuario"; 

interface ILoginData extends Pick<IUsuario, 'email' | 'senha'> {}

export default function Login() {
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<ILoginData>({
    mode: "onSubmit",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const onSubmit = () => { console.log("Submetendo...") };

  return (
    <FormContainer>
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
        Bem-vindo(a) de volta!
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Entre com suas credenciais para acessar sua área de requalificação.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate> 

      </form>

    </FormContainer>
  );
}