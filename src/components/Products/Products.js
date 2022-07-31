import ProductCard from "../ProductCard/ProductCard";

import "./Products.scss";

const Products = ({ products, loading }) => {
  if (loading) {
    return <div className="placeholder">Loading...</div>;
  }
  return (
    <div className="product__list">
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};
export default Products;
