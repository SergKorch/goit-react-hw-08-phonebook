import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authSlice';

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
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
              <Typography level="body2">Log in to continue</Typography>
            </div>

            <TextField
              name="name"
              type="name"
              value={name}
              onChange={handleChange}
              placeholder="JohnDoe"
              label="Name"
            />
            <TextField
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="johndoe@email.com"
              label="Email"
            />
            <TextField
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="password"
              label="Password"
            />

            <Button
              type="submit"
              sx={{
                mt: 1, // margin top
              }}
            >
              Registration
            </Button>
            <Typography
              endDecorator={
                <Link href="/goit-react-hw-08-phonebook/login">Log in</Link>
              }
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              If you have an account.
            </Typography>
          </Sheet>
        </form>
      </CssVarsProvider>
    </div>
  );
};

export default Registration;
