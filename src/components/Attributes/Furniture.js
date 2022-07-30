import Input from "../Input/Input";

const Furniture = ({ value, changeAttr, error }) => {
  return (
    <div className="form__attributes">
      <p className="form__attributes__desc">
        Please provide the following information about the furniture:
      </p>
      <Input
        error={error.width}
        label="Width (CM)"
        id="width"
        type="number"
        value={value.furniture.width}
        onChange={changeAttr}
      />
      <Input
        error={error.height}
        label="Height (CM)"
        id="height"
        type="number"
        value={value.furniture.height}
        onChange={changeAttr}
      />
      <Input
        error={error.length}
        label="Length (CM)"
        id="length"
        type="number"
        value={value.furniture.length}
        onChange={changeAttr}
      />
    </div>
  );
};
export default Furniture;
