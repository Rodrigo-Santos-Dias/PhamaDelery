import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { find, remove } from '../../../services/Services';
import { Category } from '../../../models/Category';
import { AuthContext } from '../../../contexts/AuthContexts';
import { toastAlert } from '../../util/toastAlert';

function DeleteCategory() {
    const [category, setCategory] = useState<Category>({} as Category);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function findById(id: string) {
        try {
            await find(`/categories/${id}`, setCategory, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('The token has expired, please log in again', 'info');
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('You need to be logged in', 'info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    function goBack() {
        navigate("/categories");
    }

    async function deleteCategory() {
        try {
            await remove(`/categories/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            toastAlert('Category successfully deleted', 'success');
        } catch (error) {
            toastAlert('Error deleting the category', 'error');
        }

        goBack();
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Delete Category</h1>

            <p className='text-center font-semibold mb-4'>Are you sure you want to delete the following category?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-2xl'>Category</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{category.description}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={goBack}>No</button>
                    <button className='w-full text-slate-100 bg-green-400 hover:bg-green-600 flex items-center justify-center' onClick={deleteCategory}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCategory;


