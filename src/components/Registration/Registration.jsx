import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

const Registration = () => {
  return (
    <div>
      <CssVarsProvider>
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Log in to continue</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button
            sx={{
              mt: 1, // margin top
            }}
          >
            Registration
          </Button>
          <Typography
            endDecorator={<Link href="/login">Log in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            If you have an account.
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
};

export default Registration;