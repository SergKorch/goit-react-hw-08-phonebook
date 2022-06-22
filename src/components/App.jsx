import s from './phonebook.module.css';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('./HomePage'));
const Login = lazy(() => import('./Login'));
const Registration = lazy(() => import('./Registration'));
const ContactList = lazy(() => import('./ContactList'));
const ContactForm = lazy(() => import('./ContactForm'));
const Filter = lazy(() => import('./Filter'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <header className={s.phonebook}>
        <Navigation />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <div>
                    <h1>Phonebook</h1>
                    <ContactForm />
                    <Filter title="Find contacts by name" />
                    <ContactList />
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route path="*" element={<></>} />
          </Routes>
        </Suspense>
      </header>
    </>
  );
};

export default App;
