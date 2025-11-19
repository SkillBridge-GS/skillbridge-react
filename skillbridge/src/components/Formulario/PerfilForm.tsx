import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import type { IPerfil } from "../../types/tipoPerfil";

interface IPerfilFormProps {
    initialData: IPerfil | null; 
    idUsuario: number;          
}

interface IFormData extends Omit<IPerfil, 'idPerfil'> {}

// URL da API
const API_URL_BASE = "https://rm563654skillbridge.onrender.com/perfil";

export default function PerfilForm({ initialData, idUsuario }: IPerfilFormProps) {
  
  const {
    register,
    handleSubmit,
    setValue, 
    formState: { errors, isSubmitting }
  } = useForm<IFormData>({
    defaultValues: {
        idUsuario: idUsuario,
        profissaoAtual: "",
        anosExperiencia: 0,
        nivelEducacao: "",
        skills: "",
        cidade: ""
    }
  });

  useEffect(() => {
    if (initialData) {
      setValue("profissaoAtual", initialData.profissaoAtual);
      setValue("anosExperiencia", initialData.anosExperiencia);
      setValue("nivelEducacao", initialData.nivelEducacao);
      setValue("skills", initialData.skills);
      setValue("cidade", initialData.cidade);
    }
  }, [initialData, setValue]);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const isEditing = initialData !== null;
    let url = API_URL_BASE;
    let method = 'POST';

    if (isEditing && initialData?.idPerfil) {
        url = `${API_URL_BASE}/user/${initialData.idPerfil}`;
        method = 'PUT';
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok || response.status === 201) {
        alert(`Perfil ${isEditing ? 'atualizado' : 'criado'} com sucesso!`);
        window.location.reload(); 
      } else if (response.status === 400) {
        alert("Falha. Verifique se todos os campos estão preenchidos corretamente.");
      } else {
        throw new Error(`Erro de servidor: ${response.status}`);
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      
      <p className="text-center text-gray-600 dark:text-gray-400">
        {initialData ? 'Edite seus dados de experiência e habilidades para um novo match.' : 'Preencha seu primeiro perfil de requalificação.'}
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="profissaoAtual">Profissão Atual</label>
        <input 
          id="profissaoAtual"
          type="text" 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register("profissaoAtual", { required: "A profissão é obrigatória." })}
        />
        {errors.profissaoAtual && <small className="text-red-500 block mt-1">{errors.profissaoAtual.message}</small>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="anosExperiencia">Anos de Experiência</label>
        <input 
          id="anosExperiencia"
          type="number" 
          min={0}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register("anosExperiencia", { 
              required: "A experiência é obrigatória.",
              valueAsNumber: true,
          })}
        />
        {errors.anosExperiencia && <small className="text-red-500 block mt-1">{errors.anosExperiencia.message}</small>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="nivelEducacao">Nível de Educação</label>
        <select 
          id="nivelEducacao"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register("nivelEducacao", { required: "O nível de educação é obrigatório." })}
        >
            <option value="">Selecione</option>
            <option value="Fundamental">Fundamental</option>
            <option value="Medio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pos-Graduacao">Pós-Graduação</option>
        </select>
        {errors.nivelEducacao && <small className="text-red-500 block mt-1">{errors.nivelEducacao.message}</small>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="skills">Habilidades (Separadas por vírgula)</label>
        <input 
          id="skills"
          type="text" 
          placeholder="Ex: Python, UX Design, Gestão de Pessoas"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register("skills", { required: "As habilidades são obrigatórias." })}
        />
        {errors.skills && <small className="text-red-500 block mt-1">{errors.skills.message}</small>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="cidade">Cidade Atual</label>
        <input 
          id="cidade"
          type="text" 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register("cidade", { required: "A cidade é obrigatória." })}
        />
        {errors.cidade && <small className="text-red-500 block mt-1">{errors.cidade.message}</small>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? "Enviando..." : (initialData ? "Atualizar Perfil" : "Criar Perfil")}
      </button>

      {initialData && <DeleteButton idPerfil={initialData.idPerfil} />}

    </form>
  );
}

function DeleteButton({ idPerfil }: { idPerfil: number }) {
    const onDelete = async () => {
        if (!window.confirm("Tem certeza que deseja excluir este perfil?")) return;

        const API_DELETE_URL = `https://rm563654skillbridge.onrender.com/perfil/user/${idPerfil}`;
        
        try {
            const response = await fetch(API_DELETE_URL, { method: 'DELETE' });

            if (response.status === 204) { 
                alert("Perfil excluído com sucesso!");
                window.location.reload(); 
            } else if (response.status === 404) {
                alert("Perfil não encontrado na API.");
            } else {
                throw new Error(`Erro ao deletar: ${response.status}`);
            }
        } catch (error) {
            console.error("Erro ao deletar:", error);
            alert("Falha ao se comunicar com a API para excluir o perfil.");
        }
    };

    return (
        <button
            type="button"
            onClick={onDelete}
            className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
            Excluir Perfil
        </button>
    );
}