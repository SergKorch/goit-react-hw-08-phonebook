import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';

const Filter = ({ title }) => {
  const filter = useSelector(state => state.contacts.filter);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      {isLoggedIn && (
        <CssVarsProvider>
          <Sheet
            sx={{
              maxWidth: 400,
              mx: 'auto', // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography level="h4" component="h4">
              <b>{title}</b>
            </Typography>
            <TextField
              type="text"
              value={filter}
              onChange={e => dispatch(changeFilter(e.target.value))}
            />
          </Sheet>
        </CssVarsProvider>
      )}
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
