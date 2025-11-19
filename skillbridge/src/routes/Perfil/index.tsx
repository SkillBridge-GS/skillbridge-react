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
  
const idUsuario = localStorage.getItem('idUsuario'); 

  useEffect(() => {
    if (!idUsuario) {
      return;
    }
    setIsLogged(true);

    const fetchPerfil = async () => {
      try {
        const response = await fetch(`${API_URL_BASE}/${idUsuario}`);
        
        if (response.ok) {
          const data: IPerfil[] = await response.json();
          if (data && data.length > 0) {
            setPerfil(data[0]); 
          }
        } 
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchPerfil();
  }, [idUsuario, navigate]);
  