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
