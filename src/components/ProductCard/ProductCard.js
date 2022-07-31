import Checkbox from "../Checkbox/Checkbox";
import "./ProductCard.scss";

const ProductCard = ({ product, setChecked, checked }) => {
  function handleCheck(e) {
    if (e.target.checked) {
      let checkedIds = [...checked, product.product_id];
      setChecked(checkedIds);
    } else {
      let uncheckedIds = checked.filter((id) => id !== product.product_id);
      setChecked(uncheckedIds);
    }
  }

  return (
    <div className="product__card">
      <Checkbox id={product.product_sku} handleCheck={handleCheck} />

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
