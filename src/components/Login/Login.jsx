import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  return (
    <div>
      <CssVarsProvider>
        <form onSubmit={handleSubmit}>
          <Sheet
            sx={{
              maxWidth: 400,
              mx: 'auto', // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue</Typography>
            </div>
            <TextField
              onChange={handleChange}
              name="email"
              type="email"
              value={email}
              placeholder="johndoe@email.com"
              // pass down to FormLabel as children
              label="Email"
            />
            <TextField
              onChange={handleChange}
              name="password"
              type="password"
              value={password}
              placeholder="password"
              label="Password"
            />
            <Button
              type="submit"
              sx={{
                mt: 1, // margin top
              }}
            >
              Log in
            </Button>
            <Typography
              endDecorator={<NavLink to="/register">Sign up</NavLink>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don't have an account?
            </Typography>
          </Sheet>
        </form>
      </CssVarsProvider>
    </div>
  );
};

export default Login;
