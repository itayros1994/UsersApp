import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSetNewUser, onSetUpdateUser, onSetModalOpen } from '../../store/action/users.action';
import { userService } from '../../service/service';
import Button from '@mui/material/Button';

export function UserForm() {
  const dispatch = useDispatch();
  const { userEdit, modalOpen } = useSelector((state) => state.usersModule);

  useEffect(() => {
    if (userEdit !== null) updateUserInput(userEdit);
  }, [userEdit]);

  let [userInput, updateUserInput] = useState({
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
      medium: 'https://randomuser.me/api/portraits/med/men/93.jpg',
    },
  });

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

  function setNewId() {
    const login = { ...userInput.login, uuid: userService.makeId(30) };
    updateUserInput({ ...userInput, login });
  }

  function setNewPicture() {
    const picture = { ...userInput.picture, medium: `https://randomuser.me/api/portraits/med/men/${userService.makeId(2)}.jpg` };
    console.log('picture', picture);
    updateUserInput({ ...userInput, picture});
  }

  function cleanForm() {
    updateUserInput({
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
        uuid: '',
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/93.jpg',
      },
    });
  }

  const addNewUser = (event) => {
    event.preventDefault();

    if (userEdit !== null) {
      dispatch(onSetUpdateUser(userInput));
      dispatch(onSetModalOpen(false));
      cleanForm();
    } else {
      if (userInput.name.first.length < 4 || userInput.name.last < 4) return console.log('not valid');
      setNewPicture();
      setNewId();
      dispatch(onSetNewUser(userInput));
      dispatch(onSetModalOpen(false));
      cleanForm();
    }
  };

  return (
    <div className={modalOpen ? 'block' : 'none'}>
      <div className="user-from-container">
        <form className='add-user-form' onSubmit={addNewUser}>
          <h2 className='new-user-header'>New User</h2>
          <TextField value={userInput.name.first} type="text" onChange={userFirstNameHandler} label="First Name" className="text-field"></TextField>
          <TextField value={userInput.name.last} type="text" onChange={userLastNameHandler} label="Last Name" className="text-field"></TextField>
          <TextField value={userInput.location.country} type="text" onChange={userAdressHandler} label="Country" className="text-field"></TextField>
          <TextField value={userInput.email} type="email" onChange={userEmailHandler} label="Email" className="text-field"></TextField>
          <Button className="mui-button" type="submit" variant="contained">
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}
