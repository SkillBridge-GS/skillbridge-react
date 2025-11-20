import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/Formulario/FormContainer";
import type { IUsuario } from "../../types/tipoUsuario"; 

// URL API
const API_URL = "https://rm563654skillbridge.onrender.com/usuario";

export default function Cadastro() {
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<IUsuario>({
    mode: "onSubmit",
    criteriaMode: "firstError",
    shouldFocusError: true, 
  });

  const onSubmit: SubmitHandler<IUsuario> = async (data) => {
    console.log("Dados a enviar:", data);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok || response.status === 201) { 
        alert("Cadastro realizado com sucesso! Faça login para continuar.");
        navigate('/login'); 
      } else if (response.status === 400) {
        alert("Falha no cadastro. Verifique os dados fornecidos.");
        console.error("Erro 400 - Dados Inválidos", await response.json());
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
        Crie sua conta SkillBridge
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Preencha seus dados para começar sua requalificação.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate> 
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="nome">
            Nome Completo
          </label>
          <input 
            id="nome"
            type="text" 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register("nome", { 
              required: "O nome é obrigatório.",
            minLength: { value: 3, message: "Mínimo 3 caracteres." }
            })}
          />

          {errors.nome && <small className="text-red-500 block mt-1">{errors.nome.message}</small>}
        </div>


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


        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="idade">
            Idade
          </label>
          <input 
            id="idade"
            type="number"
            min={16} 
            max={100} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register("idade", { 
              required: "A idade é obrigatória.",
              valueAsNumber: true, 
              min: { value: 16, message: "Idade mínima 16 anos." },
              max: { value: 100, message: "Idade máxima 100 anos." }
            })}
          />
          {errors.idade && <small className="text-red-500 block mt-1">{errors.idade.message}</small>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting} 
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors">
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>

      <div className="text-center text-sm text-gray-700 dark:text-gray-100 transition-colors">
        Já tem conta? 
        <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline ml-1 transition-colors">
          Faça login
        </Link>
      </div>
    </FormContainer>
  );
}