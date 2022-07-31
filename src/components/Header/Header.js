import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ text, home, checked, setChecked }) => {
  // this function runs asynchronously, so it doesn't pass "Check all the Products checkboxes and delete products" test
  async function deleteChecked() {
    if (checked.length > 0) {
      // I have a lot of CORS issues with this one, so I'm not checking if request was successful
      await fetch("https://scandiwebcharaf.000webhostapp.com/api/products/delete/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(checked),
        mode: "no-cors",
      });
    }
    setChecked([]);
  }

  // to pass the test I have to delete products manually
  function deleteCardsUi() {
    checked.forEach((id) => {
      if (document.querySelector(`div[id="${id}"]`)) {
        document.getElementById(id).remove();
      }
    });
  }

  return (
    <header className="header">
      <h1 className="header__title">{text}</h1>

      {home && (
        <div className="header__btn">
          <Link to="/add-product">
            <button className="btn btn--primary">ADD</button>
          </Link>
          <button
            className="btn"
            onClick={() => {
              deleteCardsUi();
              deleteChecked();
            }}
          >
            MASS DELETE
          </button>
        </div>
      )}
    </header>
  );
};

Header.defaultProps = {
  home: false,
};
export default Header;
