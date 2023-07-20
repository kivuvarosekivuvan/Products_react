import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  console.log({ products });

  let navigate = useNavigate();

  return (
    
    <div>

      

       <h1 className="heading">Available products</h1>
       <div className="product">
       <button
            className="btn"
            onClick={() => {
              navigate("/newproduct");
            }}
          >
            ADD PRODUCT
          </button>
     
      {products.map(item => (
        <div className="content" key={item.id}>
          <img className="image" alt="" src={item.images[3]} />
          <h3>{item.title}</h3>
          <h4>Ksh {item.price}</h4>
          <h4>Ksh {item.discountPercentage}</h4>
          <button
            onClick={() => {
              navigate(`/products/${item.id}`);
            }}
          >
            DETAILS
          </button>
   
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Products;

