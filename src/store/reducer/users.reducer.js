const initialState = {
  allUsers: [],
  users: [],
  modalOpen: false,
  userEdit: null,
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };

    case 'SET_ALL_USERS':
      return {
        ...state,
        allUsers: action.allUsers,
      };

    case 'SET_NEW_USER':
      return {
        ...state,
        users: [...state.users, action.user],
      };

    case 'DELTE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.login.uuid !== action.user.login.uuid),
      };

    case 'MODAL_OPEN':
      return {
        ...state,
        modalOpen: action.isOpen,
      };

    case 'SET_USER_EDIT':
      return {
        ...state,
        userEdit: action.user,
      };

    case 'SET_UPDATE_USER':
      const idx = state.users.findIndex((user) => user.login.uuid === action.user.login.uuid);
      return {
        ...state,
        users: state.users
          .slice(0, idx)
          .concat(action.user)
          .concat(state.users.splice(idx + 1)),
      };

    case 'SET_FILTER_BY':
      return {
        ...state,
        users: state.users.filter((user) => user.name.first.startWiths(action.filterBy)),
      };

    default:
      return state;
  }
}
