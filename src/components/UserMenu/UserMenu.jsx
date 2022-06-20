import { useDispatch, useSelector } from 'react-redux';
// import defaultAvatar from './default-avatar.png';
import { logOut } from 'redux/authSlice';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  // const avatar = defaultAvatar;
  return (
    <> 
      <div className={s.container}>
        {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
        <span className={s.name}>Hello, {name}</span>
        <button type="button" onClick={() => dispatch(logOut())}>
          Выйти
        </button>
      </div>
    </>
  );
};
export default UserMenu;
