import { NavLink } from 'react-router-dom';
import s from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <>
      <nav className={s.sectionNav}>
        <NavLink
          to="register"
          className={({ isActive }) =>
            !isActive ? `${s.link}` : `${s.actLink}`
          }
        >
          Register
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) =>
            !isActive ? `${s.link}` : `${s.actLink}`
          }
        >
          login
        </NavLink>
      </nav>
    </>
  );
};

export default AuthNavigation;
