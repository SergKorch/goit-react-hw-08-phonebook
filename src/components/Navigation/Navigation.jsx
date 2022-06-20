
import { NavLink } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// import JoyLink from '@mui/joy/Link';
import s from './navigation.module.css';

const Navigation = () => {
  return (
    <>
    <nav className={s.sectionNav}>
      <NavLink
        to="/"
        className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Main
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        login
      </NavLink>
    </nav>
    </>
  );
};


export default Navigation;
