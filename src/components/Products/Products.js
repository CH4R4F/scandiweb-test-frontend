import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

import "./Products.scss";

const Products = ({ products }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost/api/products");
      setProductsList(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="placeholder">Loading...</div>;
  }
  if (productsList.length === 0) {
    return <div className="placeholder">No products, try to Add some products</div>;
  }
  return (
    <div className="product__list">
      {productsList.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};
export default Products;
