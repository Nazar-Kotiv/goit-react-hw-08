import css from "./Navigation.module.css";
import clsx from "clsx";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const makeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <nav>
      <NavLink className={makeLinkClass} to="/">
        Author
      </NavLink>
      {isLoggedIn && (
        <NavLink className={makeLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
