import Input from "../Input/Input";

const Dvd = ({ value, changeAttr, error }) => {
  return (
    <div className="form__attributes">
      <p className="form__attributes__desc">
        Please provide the following information about the DVD:
      </p>
      <Input
        error={error}
        label="Size (MB)"
        id="size"
        type="number"
        value={value.dvd.size}
        onChange={changeAttr}
      />
    </div>
  );
};
export default Dvd;
