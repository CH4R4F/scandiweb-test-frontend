import "./Checkbox.scss";

const Checkbox = ({ id, handleCheck }) => {
  return (
    <>
      <svg className="checkbox-symbol">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline
            points="1.5 6 4.5 9 10.5 1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polyline>
        </symbol>
      </svg>

      <div className="checkbox-container">
        <input className="checkbox-input" id={id} type="checkbox" onChange={handleCheck} />
        <label className="checkbox" htmlFor={id}>
          <span>
            <svg width="12px" height="10px">
              <use xlinkHref="#check"></use>
            </svg>
          </span>
        </label>
      </div>
    </>
  );
};
export default Checkbox;
