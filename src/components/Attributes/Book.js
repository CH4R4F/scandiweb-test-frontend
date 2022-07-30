import Input from "../Input/Input";

const Book = ({ value, changeAttr, error }) => {
  return (
    <div className="form__attributes">
      <p className="form__attributes__desc">
        Please provide the following information about the book:
      </p>
      <Input
        error={error}
        label="Weight (KG)"
        id="weight"
        type="number"
        value={value.book.weight}
        onChange={changeAttr}
      />
    </div>
  );
};
export default Book;
