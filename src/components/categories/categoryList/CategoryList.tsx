import { Dna } from 'react-loader-spinner';
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContexts";
import { Category } from "../../../models/Category";

import { find } from "../../../services/Services";
import CategoryCards from "../categoryCards/CategoryCards";
import { toastAlert } from "../../util/toastAlert";

function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
  
    let navigate = useNavigate();
  
    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;
  
    async function findCategories() {
      try {
        await find('/categories', setCategories, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if(error.toString().includes('403')) {
          toastAlert('O token expirou, favor logar novamente', 'info')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      if (token === '') {
        toastAlert('Você precisa estar logado', 'info');
        navigate('/login');
      }
    }, [token]);
  
    useEffect(() => {
      findCategories();
    }, [categories.length]);
    return (
      <>
        {categories.length === 0 && (
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((categories) => (
                <>
                  <CategoryCards key={categories.id} category={categories} />
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CategoryList;