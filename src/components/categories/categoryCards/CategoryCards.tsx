import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../../models/Category';

interface CategoryCardProps {
  category: Category;
}

function CategoryCards({ category }: CategoryCardProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{category.description}</p>
      <div className="flex">
        <Link to={`/editCategory/${category.id}`} className='w-full text-slate-100 bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deleteCategory/${category.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCards;