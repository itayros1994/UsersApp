export function onSetUsers(users) {
  return (dispatch) => {
    const action = {
      type: 'SET_USERS',
      users,
    };
    dispatch(action);
  };
}

export function onSetAllUsers(allUsers) {
  return (dispatch) => {
    const action = {
      type: 'SET_ALL_USERS',
      allUsers,
    };
    dispatch(action);
  };
}

export function onSetNewUser(user) {
  return (dispatch) => {
    const action = {
      type: 'SET_NEW_USER',
      user,
    };
    dispatch(action);
  };
}

export function onDeleteUser(user) {
  return (dispatch) => {
    const action = {
      type: 'DELTE_USER',
      user,
    };
    dispatch(action);
  };
}

export function onSetModalOpen(isOpen) {
  return (dispatch) => {
    const action = {
      type: 'MODAL_OPEN',
      isOpen,
    };
    dispatch(action);
  };
}

export function onSetUserToEdit(user) {
  return (dispatch) => {
    const action = {
      type: 'SET_USER_EDIT',
      user,
    };
    dispatch(action);
  };
}

export function onSetUpdateUser(user) {
  return (dispatch) => {
    const action = {
      type: 'SET_UPDATE_USER',
      user,
    };
    dispatch(action);
  };
}

export function onSetFilterBy(filterBy) {
  return (dispatch) => {
    const action = {
      type: 'SET_FILTER_BY',
      filterBy,
    };
    
    dispatch(action);
  };
}

