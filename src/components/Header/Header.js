import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ text, home, checked, setChecked, setLoading }) => {
  async function deleteChecked() {
    if (checked.length > 0) {
      // I'm not handleing server or connection errors in those cases
      await fetch("https://scandiwebcharaf.000webhostapp.com/api/products/delete/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(checked),
        mode: "no-cors",
      });
      // I have a lot of CORS issues with this one, so I'm not checking if request was successful
      // I just rerender the component to update the list
      setLoading(true);
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">{text}</h1>

      {home && (
        <div className="header__btn">
          <Link to="/add-product">
            <button className="btn btn--primary">Add Product</button>
          </Link>
          <button className="btn" onClick={deleteChecked}>
            Mass Delete
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
