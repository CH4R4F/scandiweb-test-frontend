import ProductCard from "../ProductCard/ProductCard";

import "./Products.scss";

const Products = ({ products, checked, setChecked, loading }) => {
  if (loading) {
    return <div className="placeholder">Loading...</div>;
  }
  if (products.length === 0) {
    return <div className="placeholder">No products, try to Add some products</div>;
  }
  return (
    <div className="product__list">
      {products.map((product) => (
        <ProductCard
          checked={checked}
          setChecked={setChecked}
          key={product.product_id}
          product={product}
        />
      ))}
    </div>
  );
};
export default Products;
