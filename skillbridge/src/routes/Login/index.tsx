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

  const onSubmit: SubmitHandler<ILoginData> = async (data) => {
    if (data.email !== MOCK_LOGIN_CREDENCIAIS.email || data.senha !== MOCK_LOGIN_CREDENCIAIS.senha) {
      alert("Credenciais inválidas. Use o e-mail: admin@gmail.com e a senha: admin");
      return;
    }
    
    try {
      const response = await fetch(`${API_URL_BASE}/${MOCK_LOGIN_CREDENCIAIS.idUsuario}`);

      if (response.ok) {
        const usuarioData = await response.json();
        
        localStorage.setItem("authToken", "simulated_token_123"); 
        localStorage.setItem("idUsuario", usuarioData.idUsuario.toString());
        localStorage.setItem("nomeUsuario", usuarioData.nome);

        alert(`Login realizado com sucesso, ${usuarioData.nome}!`);
        navigate('/perfil'); 

      } else {
        alert("Erro ao buscar dados do usuário. O usuário de teste pode não ter sido criado na API (ID 1).");
      }

    } catch (error) {
      console.error("Erro na requisição de login:", error);
      alert("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <FormContainer>
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
        Acesse sua conta
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Use as credenciais de teste para entrar: **admin@gmail.com** e **admin**
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate> 
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
            E-mail
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="user@fiap.com.br"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register("email", { 
              required: "O e-mail é obrigatório."
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
            placeholder="123"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register("senha", { 
              required: "A senha é obrigatória."
            })}
          />
          {errors.senha && <small className="text-red-500 block mt-1">{errors.senha.message}</small>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <div className="text-center text-sm">
        Não tem conta? 
        <Link to="/cadastro" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
          Cadastre-se
        </Link>
      </div>
    </FormContainer>
  );
}