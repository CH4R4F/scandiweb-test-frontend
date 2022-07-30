import axios from "axios";
import { useNavigate } from "react-router-dom";

async function saveProduct(data) {
  let productData = formateData(data);
  const res = await axios
    .post("http://localhost/api/products", productData)
    .then((res) => res.data);

  return res.status === 200;
}

function formateData({ sku, name, price, type, ...attributes }) {
  let formatedData = {
    sku,
    name,
    price,
    type,
  };
  if (type === "dvd") {
    formatedData.attributes = `${attributes.size} MB`;
  } else if (type === "book") {
    formatedData.attributes = `${attributes.weight} KG`;
  } else {
    formatedData.attributes = `${attributes.width} x ${attributes.height} x ${attributes.length} CM`;
  }

  return formatedData;
}

export default saveProduct;
