import { NavLinks, NavLogo, NavActions } from "./styles";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
  color: "red",
  // backgroundColor: "#ccc"
};

function Nav() {
  return (
    <nav className="flex auto">
      <NavLinks className="flex">
      <NavLink
          to="/"
          style={(values) => {
            return values.isActive ? activeStyle : undefined;
          }}
        >
          Coins
        </NavLink>
        <NavLink
          to="/exchanges"
          style={(values) => {
            return values.isActive ? activeStyle : undefined;
          }}
        >
          Exchanges
        </NavLink>
        <NavLink
          to="/swap"
          style={(values) => {
            return values.isActive ? activeStyle : undefined;
          }}
        >Swap
        </NavLink>
      </NavLinks>

      <NavLogo href="#">
        <img
          src="https://dulcet-vacherin-72cd99.netlify.app/pictures/coincap-io-logo-vector.png"
          alt=""
          width="90px"
        />
      </NavLogo>

      <NavActions className="flex">
        <div className="search">
          <img
            src="https://dulcet-vacherin-72cd99.netlify.app/pictures/search-2906.svg"
            alt=""
            width="15px"
          />
        </div>
        <a href="#" id="setting">
          <img
            src="https://dulcet-vacherin-72cd99.netlify.app/pictures/settings-8178.svg"
            alt=""
            width="15px"
            className="setting"
          />
        </a>
        <a href="#" className="button" id="button">
          Connect Wallet
        </a>
      </NavActions>
    </nav>
  );
}

export default Nav;
