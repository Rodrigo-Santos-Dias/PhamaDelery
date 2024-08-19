import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { find, register, update } from '../../../services/Services';
import { Category } from '../../../models/Category';
import { AuthContext } from '../../../contexts/AuthContexts';
import { toastAlert } from '../../util/toastAlert';


function CategoryForm() {
  const [category, setCategory] = useState<Category>({} as Category);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findById(id: string) {
    await find(`/categories/${id}`, setCategory);
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(category))
  }

  async function createNewCategory(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await update(`/categories`, category, setCategory, {
          headers: {
            'Authorization': token
          }
        })

        toastAlert('Tema atualizado com sucesso','sucesso')
        goBack()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('O token expirou, favor logar novamente','info')
          handleLogout()
        } else {
          toastAlert('Erro ao atualizar o Tema','erro')
        }

      }

    } else {
      try {
        await register(`/categories`, category, setCategory, {
          headers: {
            'Authorization': token
          }
        })

        toastAlert('Tema cadastrado com sucesso','sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlert('O token expirou, favor logar novamente','info')
          handleLogout()
        } else {
          toastAlert('Erro ao cadastrado o Tema','erro')
        }
      }
    }

    goBack()
  }

  function goBack() {
    navigate("/temas")
  }

  useEffect(() => {
    if (token === '') {
      toastAlert('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={createNewCategory}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={category.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
