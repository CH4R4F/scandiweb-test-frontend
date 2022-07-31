import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState([]);

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
      <Header
        text="Product List"
        home={true}
        checked={checked}
        setChecked={setChecked}
        setLoading={setLoading}
      />
      <Products
        products={productsList}
        loading={loading}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};
export default ProductList;
