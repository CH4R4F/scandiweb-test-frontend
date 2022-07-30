import "./Input.scss";

const Input = ({ label, id, type, value, onChange, error }) => {
  // I'm trying to handle errors without required attributes
  return (
    <div className="form__row">
      <label htmlFor={id}>{label}</label>
      <input name={id} type={type} id={id} value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
export default Input;
