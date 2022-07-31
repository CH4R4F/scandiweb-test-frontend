async function saveProduct(data) {
  let productData = formateData(data);
  // example using fetch
  const res = await fetch("https://scandiwebcharaf.000webhostapp.com/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    mode: "no-cors",
  });

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
