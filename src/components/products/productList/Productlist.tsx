import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContexts";
import { Product } from "../../../models/Product";
import { useContext, useEffect, useState } from "react";
import { toastAlert } from "../../util/toastAlert";

import { Dna } from "react-loader-spinner";
import CardProduct from "../productCard/productCard";
import { find } from "../../../services/Services";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  let navigate = useNavigate();

  useEffect(() => {
   
    findProducts();
  }, []);

  async function findProducts() {
    try {
      await find('/products', setProducts);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlert('An error occurred while fetching products','info');
        
      }
    }
  }
  
    useEffect(() => {
      findProducts();
    }, [products.length]);
  
    return (
      <>
        {products.length === 0 && (
        <div className="container  min-h-screen my-1 flex flex-col justify-center items-center ">   
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-gray-600">There are currently no products available. Please check back later.</p>
        </div>
        </div>
        )}
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  
  }
  
  export default ProductList;