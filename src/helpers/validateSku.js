import axios from "axios";

async function validateSku(sku) {
  sku = sku.trim();
  // check if sku is already in database

  const res = await axios
    .get(`https://scandiwebcharaf.000webhostapp.com/api/products/${sku}`)
    .then((res) => res.data);
  if (res) {
    return {
      sku: "SKU already exists, please choose a unique SKU",
    };
  }
  return false;
}

export default validateSku;
