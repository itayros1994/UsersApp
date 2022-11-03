import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSetNewUser, onSetUpdateUser, onSetModalOpen, onSetUserToEdit, onSetSnackBar } from '../../store/action/users.action';
import { userService } from '../../service/service';
import Button from '@mui/material/Button';
import { SnackBar } from '../SnackBar/SnackBar';

export function UserForm() {
  const dispatch = useDispatch();
  const { userEdit, modalOpen, users } = useSelector((state) => state.usersModule);
  const [open, setOpen] = useState(false);
  const [snackMessege, setSnackMessege] = useState(false);

  const defaultUserInput = {
    name: {
      first: '',
      last: '',
    },
    location: {
      street: {},
      country: '',
    },
    email: '',
    login: {
      uuid: userService.makeId(30),
    },
    picture: {
      medium: `https://randomuser.me/api/portraits/med/men/${userService.makeId(1)}.jpg`,
    },
  };

  useEffect(() => {
    if (userEdit !== null) updateUserInput(userEdit);
  }, [userEdit]);

  let [userInput, updateUserInput] = useState({ ...defaultUserInput });

  function userFirstNameHandler(event) {
    const name = { ...userInput.name, first: event.target.value };
    updateUserInput({ ...userInput, name });
  }

  function userLastNameHandler(event) {
    const name = { ...userInput.name, last: event.target.value };
    updateUserInput({ ...userInput, name });
  }

  function userAdressHandler(event) {
    const location = { ...userInput.location, country: event.target.value };
    updateUserInput({ ...userInput, location });
  }

  function userEmailHandler(event) {
    updateUserInput({
      ...userInput,
      email: event.target.value,
    });
  }

  function cleanForm() {
    updateUserInput({ ...defaultUserInput });
    dispatch(onSetUserToEdit(null));
  }

  const addNewUser = (event) => {
    event.preventDefault();

    // Switching between Add / Edit
    if (userEdit !== null) {
      dispatch(onSetUpdateUser(userInput));
      dispatch(onSetModalOpen(false));
      cleanForm();
    } else {
      if (users.findIndex((user) => user.email === userInput.email) !== -1) {
        dispatch(onSetSnackBar(true));
        return;
      }
      if (userInput.name.first.length < 4 || userInput.name.last < 4) return console.log('not valid');
      userInput.login.uuid = userService.makeId(30);
      dispatch(onSetNewUser(userInput));
      dispatch(onSetModalOpen(false));
      cleanForm();
    }
  };

  return (
    <div className="button-container">
      <SnackBar snackMessege={snackMessege} open={open} />
      <Button
        sx={{ minWidth: 300 }}
        className="button-mui"
        variant="contained"
        onClick={() => {
          dispatch(onSetModalOpen(!modalOpen));
          cleanForm();
        }}
      >
        {modalOpen ? 'Close Form' : 'Add New User'}
      </Button>
      <div className={modalOpen ? 'block' : 'none'}>
        <div className="user-from-container">
          <form className="add-user-form" onSubmit={addNewUser}>
            <h2>{userEdit !== null ? 'Update User' : 'New User'}</h2>
            <TextField value={userInput.name.first} type="text" onChange={userFirstNameHandler} label="First Name" className="text-field-form"></TextField>
            <TextField value={userInput.name.last} type="text" onChange={userLastNameHandler} label="Last Name" className="text-field-form"></TextField>
            <TextField value={userInput.location.country} type="text" onChange={userAdressHandler} label="Country" className="text-field-form"></TextField>
            <TextField value={userInput.email} type="email" onChange={userEmailHandler} label="Email" className="text-field-form"></TextField>
            <div className='confirm-btns-container'>
            <Button className="mui-button" type="submit" variant="contained">
              SUBMIT
            </Button>
            <Button onClick={() => dispatch(onSetModalOpen(false))} className="mui-button" type="submit" variant="contained">
              CANCEL
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
