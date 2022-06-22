import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <h1>Phonebook</h1>
      {!isLoggedIn && <h2>Please login or register.</h2>}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px',
        }}
      >
        {!isLoggedIn ? (
          <CssVarsProvider>
            <Button variant="solid" component={RouterLink} to="/register">
              Registration
            </Button>
            <Button variant="soft" component={RouterLink} to="/login">
              Log in
            </Button>
          </CssVarsProvider>
        ) : (
          <h1>
            You are logged in. Pleasant use!
            <span role="img" aria-label="Иконка приветствия">
              💁‍♀️
            </span>
          </h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
