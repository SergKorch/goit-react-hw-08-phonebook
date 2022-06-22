import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './navigation.module.css';
import UserMenu from 'components/UserMenu';
import AuthNavigation from 'components/AuthNavigation';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <nav className={s.sectionNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            !isActive ? `${s.link}` : `${s.actLink}`
          }
        >
          Main
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive }) =>
            !isActive ? `${s.link}` : `${s.actLink}`
          }
        >
          Contacts
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </nav>
    </>
  );
};

export default Navigation;
