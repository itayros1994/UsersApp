import { useDispatch } from 'react-redux';
import { userService } from '../service/service';
import { onSetUsers, onSetAllUsers } from '../store/action/users.action';
import { useEffect } from 'react';
import { UserList } from '../cmps/UserList/UserList';

export function UsersApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    userService
      .getUsers()
      .then((res) => { dispatch(onSetUsers(res.results))
        dispatch(onSetAllUsers(res.results)) } )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-app-container">
      <UserList />
    </div>
  );
}
