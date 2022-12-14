import "./Select.scss";

const Select = ({ options, value, onChange, error }) => {
  return (
    <div className="form__select">
      <label htmlFor="productType">Type</label>
      <select id="productType" name="type" value={value} onChange={onChange}>
        <option value="" disabled>
          Select a type
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
export default Select;
