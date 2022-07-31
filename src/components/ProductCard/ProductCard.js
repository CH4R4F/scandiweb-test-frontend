import Checkbox from "../Checkbox/Checkbox";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product__card" id={product.product_id}>
      <Checkbox id={product.product_sku} />

      <ul className="product__card__info">
        <li>{product.product_sku}</li>
        <li>{product.product_name}</li>
        <li>{product.product_price}</li>
        <li>{product.product_attribute}</li>
      </ul>
    </div>
  );
};
export default ProductCard;
