// src/routes/Perfil/index.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { IPerfil } from '../../types/tipoPerfil';
import FormContainer from '../../components/Formulario/FormContainer';
import PerfilForm from './PerfilForm'; 

const API_URL_BASE = "https://rm563654skillbridge.onrender.com/perfil/user";

export default function Perfil() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState<IPerfil | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  
  // Obtem o ID do usuário 
  const idUsuario = localStorage.getItem('idUsuario'); 

  // buscar o perfil ao carregar a página
  useEffect(() => {
    if (!idUsuario) {
      alert("Você precisa estar logado para acessar seu perfil.");
      navigate('/login');
      return;
    }
    setIsLogged(true);


    const fetchPerfil = () => { /* ... */ }; 
    fetchPerfil();
  }, [idUsuario, navigate]); 
