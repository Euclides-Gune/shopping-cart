import React, {useEffect, useContext} from "react";
import './products.css';
import fetchProducts from "../../api/fetchprodutos";
import ProductCard from "../ProductCard/productcard";
import Loading from "../Loading/loading";
import AppContext from "../../context/AppContext";

const Products = () => {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {

    fetchProducts('iphone').then(response => {

      setProducts(response);
      setLoading(false);

    });

    console.log(products);

  }, []);

  return(

    (loading && <Loading />) || (
      <section className="products container">
      {
        products.map(product => <ProductCard key={product.id} data={product}/>)
      }
    </section>
    )
  );
}

export default Products;