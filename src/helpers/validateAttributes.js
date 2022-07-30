const validateAttributes = (type, attributes) => {
  let errors = {};
  if (type === "dvd") {
    if (!attributes.size) {
      errors.size = "Size is required";
    }
  }
  if (type === "book") {
    if (!attributes.weight) {
      errors.weight = "Weight is required";
    }
  }
  if (type === "furniture") {
    if (!attributes.width) {
      errors.width = "Width is required";
    }
    if (!attributes.height) {
      errors.height = "Height is required";
    }
    if (!attributes.length) {
      errors.length = "Length is required";
    }
  }
  return errors;
};
export default validateAttributes;
