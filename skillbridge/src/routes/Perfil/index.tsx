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
  
  // Obtem o ID do usuário logado
  const idUsuario = localStorage.getItem('idUsuario'); 

  // buscar o perfil ao carregar a página
  useEffect(() => {
    if (!idUsuario) {
        alert("Você precisa estar logado para acessar seu perfil.");
        navigate('/login');
        return;
    }
    setIsLogged(true);

    // Busca o perfil do usuário na API 
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

  if (isLoading || !isLogged) {
    return (
        <FormContainer>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">
                Carregando Perfil...
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
                Aguarde a conexão com o servidor.
            </p>
        </FormContainer>
    );
  }

  return (
    <FormContainer>
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center">
        {perfil ? 'Editar Seu Perfil' : 'Crie Seu Perfil de Requalificação'}
      </h2>
      <PerfilForm initialData={perfil} idUsuario={Number(idUsuario)} />
    </FormContainer>
  );
}