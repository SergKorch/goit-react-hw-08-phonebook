// import { useState } from 'react';
import s from './phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Registration from './Registration/Registration';
import Login from './Login';

const App = () => {
  return (
    <div className={s.phonebook}>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path="/"
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Suspense>
      {/* <UserMenu/> */}
    </div>
  );
};

export default App;
