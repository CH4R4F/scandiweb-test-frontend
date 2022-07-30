import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddForm.scss";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { Dvd, Book, Furniture } from "../Attributes";
import { validateAttributes, validateData, validateSku, saveProduct } from "../../helpers";

const options = [
  { value: "dvd", label: "DVD" },
  { value: "book", label: "Book" },
  { value: "furniture", label: "Furniture" },
];

const AddForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    sku: "",
    name: "",
    price: "",
    type: "",
  });

  const [attributes, setAttributes] = useState({
    dvd: {
      size: "",
    },
    book: {
      weight: "",
    },
    furniture: {
      width: "",
      height: "",
      length: "",
    },
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleAttributesChange = (e) => {
    setAttributes({
      ...attributes,
      [data.type]: { ...attributes[data.type], [e.target.name]: parseInt(e.target.value) },
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // I'm handling if inputs are empty, even if I added required attribute to them
    const errors = validateData(data);
    const attErrors = validateAttributes(data.type, attributes[data.type]);

    if (Object.keys(errors).length === 0 && Object.keys(attErrors).length === 0) {
      const skuError = await validateSku(data.sku);
      if (skuError) {
        setErrors({ ...errors, ...attErrors, ...skuError });
      } else {
        // save product return true if product was saved successfully
        setSubmitted(saveProduct({ ...data, ...attributes[data.type] }));
      }
    } else {
      setErrors({ ...errors, ...attErrors });
    }
  }

  useEffect(() => {
    if (submitted) {
      navigate("/");
    }
  }, [submitted]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        error={errors.sku}
        label="Sku"
        type="text"
        id="sku"
        value={data.sku}
        onChange={handleChange}
      />
      <Input
        error={errors.name}
        label="Name"
        type="text"
        id="name"
        value={data.name}
        onChange={handleChange}
      />
      <Input
        error={errors.price}
        label="Price"
        type="number"
        id="price"
        value={data.price}
        onChange={handleChange}
      />
      <Select error={errors.type} options={options} value={data.type} onChange={handleChange} />
      {data.type === "dvd" && (
        <Dvd error={errors.size} value={attributes} changeAttr={handleAttributesChange} />
      )}
      {data.type === "book" && (
        <Book error={errors.weight} value={attributes} changeAttr={handleAttributesChange} />
      )}
      {data.type === "furniture" && (
        <Furniture error={errors} value={attributes} changeAttr={handleAttributesChange} />
      )}
      <div className="form__actions">
        <button className="btn btn--primary" type="submit">
          Save
        </button>
        <button className="btn" type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AddForm;
