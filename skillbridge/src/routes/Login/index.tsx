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

  return (/* ... */)
}
