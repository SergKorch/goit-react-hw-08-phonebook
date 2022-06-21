// import { useState } from 'react';
import s from './phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Registration from './Registration/Registration';
import Login from './Login';
import { fetchCurrentUser } from 'redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import AuthNavigation from './AuthNavigation';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* {isFetchingCurrentUser &&} */}
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
