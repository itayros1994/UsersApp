import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSetUsers } from '../../store/action/users.action';

export function UsersFilter() {
  const { allUsers } = useSelector((state) => state.usersModule);
  const dispatch = useDispatch();

  let [filterName, setFilterName] = useState('');
  let [filterLocation, setFilterLocation] = useState('');
  let [filterId, setFilterId] = useState('');
  let [filterEmail, setFilterEmail] = useState('');

  useEffect(() => {
    filter();
  }, [filterName, filterLocation, filterId, filterEmail]);

  function handleName(event) {
    setFilterName(event.target.value);
    console.log(filterName);
  }

  function handleLocation(event) {
    setFilterLocation(event.target.value);
  }

  function handleId(event) {
    setFilterId(event.target.value);
  }

  function handleEmail(event) {
    setFilterEmail(event.target.value);
  }

  function filter() {
    let filteredUsers = allUsers
      .filter((user) => user.name.first.startsWith(filterName))
      .filter((user) => user.email.startsWith(filterEmail))
      .filter((user) => user.location.country.startsWith(filterLocation))
      .filter((user) => user.login.uuid.startsWith(filterId));
    dispatch(onSetUsers(filteredUsers));
  }

  return (
    <div className="filter-form-container">
      <form>
        <TextField className='text-field' onChange={handleName} label="Filter By Name"></TextField>
        <TextField className='text-field' onChange={handleLocation} label="Filter By Location"></TextField>
        <TextField className='text-field' onChange={handleId} label="Filter By Id"></TextField>
        <TextField className='text-field' onChange={handleEmail} label="Filter By Email"></TextField>
      </form>
    </div>
  );
}
