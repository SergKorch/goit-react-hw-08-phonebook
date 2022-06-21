import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authSlice';
import s from './UserMenu.module.css';
import { AiOutlineUser } from "react-icons/ai";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  return (
    <> 
      <div className={s.container}> 
      <AiOutlineUser/>
        <span className={s.name}>Hello, {name}</span>
        <button className={s.button} type="button" onClick={() => dispatch(logOut())}>
          Выйти
        </button>
      </div>
    </>
  );
};
export default UserMenu;
