import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/Formulario/FormContainer";
import type { IUsuario } from "../../types/tipoUsuario"; 

interface ILoginData extends Pick<IUsuario, 'email' | 'senha'> {}

const API_URL = "https://rm563654skillbridge.onrender.com/usuario/login"; // Assumindo um endpoint /login

export default function Login() {
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<ILoginData>({ /* ... */ });

  const onSubmit: SubmitHandler<ILoginData> = async (data) => {
    console.log("Dados de login a enviar:", data);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) { 
        alert("Login realizado com sucesso! Bem-vindo(a)!");
        console.log("Resposta da API:", await response.json());
        navigate('/dashboard'); 
      } else if (response.status === 401) {
        alert("Falha no login. E-mail ou senha incorretos.");
      } else {
        throw new Error(`Erro de servidor: ${response.status}`);
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
    }
  };

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
<div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
            E-mail
          </label>
          <input 
            id="email"
            type="email" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register("email", { 
              required: "O e-mail é obrigatório.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Formato de e-mail inválido."
              }
            })}
          />
          {errors.email && <small className="text-red-500 block mt-1">{errors.email.message}</small>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="senha">
            Senha
          </label>
          <input 
            id="senha"
            type="password" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register("senha", { 
              required: "A senha é obrigatória.",
              minLength: { value: 6, message: "Mínimo 6 caracteres." }
            })}
          />
          {errors.senha && <small className="text-red-500 block mt-1">{errors.senha.message}</small>}
        </div>
    </FormContainer>
  );
}