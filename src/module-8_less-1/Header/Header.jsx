import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/authOperations";
const Header = () => {
  const dispatch = useDispatch()
  const isLogedIn = useSelector(state => state.auth.isLogedIn)
  const user = useSelector(state => state.auth.user)

const classActive = ({isActive}) => clsx(s.link, isActive && s.active)

  return <header className={s.header}>
    <h2>Auth</h2>
    <nav className={s.nav}>
        {isLogedIn && `${user.email}`}

        <NavLink className={classActive} to='/'>Home</NavLink>
        
        
        <NavLink className={classActive }  to='/todos'>Todos</NavLink>
        {!isLogedIn && 
        <>
        <NavLink className={classActive}  to='/register'>Register</NavLink>
        <NavLink className={classActive}  to='/login'>Login</NavLink>
        </>
        }
        {isLogedIn && <button onClick={()=>dispatch(logoutThunk())}>Logout</button>}
    </nav>
  </header>;
};

export default Header;
