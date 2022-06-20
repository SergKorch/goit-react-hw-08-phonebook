
import { NavLink } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import JoyLink from '@mui/joy/Link';
// import s from './navigation.module.css';

const Navigation = () => {
  return (
    <nav >
      <JoyLink
        to="/"
        // className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Main
      </JoyLink>
      <JoyLink
        to="/register"
        // className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Register
      </JoyLink>
      <JoyLink
        to="/login"
        // className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        login
      </JoyLink>
      <JoyLink
        to="/contacts"
        // className={({ isActive }) => (!isActive ? `${s.link}` : `${s.actLink}`)}
      >
        Contacts
      </JoyLink>
    </nav>
  );
};


export default Navigation;
