import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ text, home }) => {
  return (
    <header className="header">
      <h1 className="header__title">{text}</h1>

      {home && (
        <div className="header__btn">
          <Link to="/add-product">
            <button className="btn btn--primary">Add Product</button>
          </Link>
          <button className="btn">Mass Delete</button>
        </div>
      )}
    </header>
  );
};

Header.defaultProps = {
  home: false,
};
export default Header;
