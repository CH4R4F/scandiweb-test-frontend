import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://scandiwebcharaf.000webhostapp.com/api/products");
      setProductsList(result.data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      <Header text="Product List" home={true} setLoading={setLoading} />
      <Products products={productsList} loading={loading} />
    </div>
  );
};
export default ProductList;
