import React from 'react';
import { Link } from 'react-router-dom';
import farmaciaLogo from '../../assets/farmaciaLogo.png';

function Home() {
    return (
        <>
            <div className="bg-green-700 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Bem-vindo à nossa Farmácia!</h2>
                        <p className='text-xl'>Encontre os melhores produtos de saúde e bem-estar.</p>
  
                        <div className="flex justify-around gap-4">     
                            <Link to="/products">
                                <button className='rounded bg-white text-green-800 py-2 px-4'>Explorar Produtos</button>
                            </Link>
                        </div>
                    </div>
  
                    <div className="flex justify-center">
                        <img src={farmaciaLogo} alt="Farmácia Logo" className='w-2/3' />
                    </div>
                </div>
            </div>
            {/* Substitua <ListaPostagens /> com o componente apropriado da sua aplicação */}
        </>
    );
}

export default Home;