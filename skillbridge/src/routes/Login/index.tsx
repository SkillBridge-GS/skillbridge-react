import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/Formulario/FormContainer";

interface ILoginData {
  email: string;
  senha: string;
}

// URL API
const API_URL_BASE = "https://rm563654skillbridge.onrender.com/usuario";

// Simulação de Login
const MOCK_LOGIN_CREDENCIAIS = {
  email: "admin@gmail.com",
  senha: "admin", 
  idUsuario: 1 
};

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

  const onSubmit = () => {}; 

  return (
    <FormContainer>
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
        Acesse sua conta
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Use as credenciais de teste para entrar: **admin@gmail.com** e **admin**
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate> 
        

      </form>

    </FormContainer>
  );
}
