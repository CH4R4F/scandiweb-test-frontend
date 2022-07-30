const validateData = (data) => {
  let { sku, name, price, type } = data;
  let errors = {};
  if (!sku) {
    errors.sku = "Sku is required";
  }
  if (!name) {
    errors.name = "Name is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!type) {
    errors.type = "Type is required";
  }
  return errors;
};

export default validateData;
