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


const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state=>state.auth.isFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
    {/* {isFetchingCurrentUser &&} */}
    <div className={s.phonebook}>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route exact
            path="/contacts" redirectTo="/login"
            element={
             <div>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <Filter title="Find contacts by name" />
                <ContactList />
                </div>
            }
          />
          <Route exact path="/login" redirectTo="/contacts" element={<Login />} restricted/>
          <Route exact path="/register" element={<Registration />} restricted/>
        </Routes>
      </Suspense>
      {/* <UserMenu/> */}
    </div>
    </>
  );
};

export default App;
