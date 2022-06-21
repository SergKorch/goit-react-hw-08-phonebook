import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { addContact } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const nameInpId = nanoid();
  const numbInpId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const changeInp = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const submitInp = event => {
    event.preventDefault();
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContact) {
      Notiflix.Notify.failure(`${name} is already in contact`);
      return contacts;
    } else {
      dispatch(addContact({ name, phone }));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <div>
      <CssVarsProvider>
        <form onSubmit={submitInp} action="submit">
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
            <TextField
              nput
              type="text"
              name="name"
              value={name}
              onChange={changeInp}
              id={nameInpId}
              placeholder="John Doe"
              label="Name"
            />
            <TextField
              type="tel"
              name="number"
              value={phone}
              onChange={changeInp}
              id={numbInpId}
              placeholder="+38(000)-000-00-00"
              label="Phone number"
            />
            <Button
              type="submit"
              sx={{
                mt: 1, // margin top
              }}
            >
              Add contact
            </Button>
          </Sheet>
        </form>
      </CssVarsProvider>
    </div>
  );
};

export default ContactForm;
