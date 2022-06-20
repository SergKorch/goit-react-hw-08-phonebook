import { useSelector } from 'react-redux';
import { Route, Navigate  } from 'react-router-dom';

const PublicRoute =({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
})=> {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
}
export default PublicRoute