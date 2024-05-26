import { NavLink } from "react-router-dom";
import Space from "./Space";

function LocationSidebar() {
  return (
    <ul className="location-sidebar d-flex flex-column ">
      <Space />
      <NavLink
        className={({ isActive }) =>
          "location" + (isActive ? " location--active" : "")
        }
        to="/monstadt"
      >
        <li>Monstadt</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "location" + (isActive ? " location--active" : "")
        }
        to="/liyue"
      >
        <li>Liyue</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "location" + (isActive ? " location--active" : "")
        }
        to="/inazuma"
      >
        <li>Inazuma</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "location" + (isActive ? " location--active" : "")
        }
        to="/sumeru"
      >
        <li>Sumeru</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "location" + (isActive ? " location--active" : "")
        }
        to="/fontaine"
      >
        <li>Fontaine</li>
      </NavLink>
      <li className="location">Prossimamente</li>
    </ul>
  );
}

export default LocationSidebar;
