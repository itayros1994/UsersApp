import { UserForm } from '../UserForm/UserForm';
import { useSelector, useDispatch } from 'react-redux';
import { UserPreview } from '../../cmps/UserPreview/UserPreview';
import { Button } from '@mui/material';
import { onSetModalOpen } from '../../store/action/users.action';
import { UsersFilter } from '../UserFilter/UsersFilter';

export function UserList() {
  const { users, modalOpen } = useSelector((state) => state.usersModule);
  const dispatch = useDispatch();

  if (!users) return <div>Loading</div>;

  return (
    <div className="center">
      <div className="top-container">
        <UsersFilter />
        <Button sx={{ minWidth: 300 }} className="button-mui" variant="contained" onClick={() => dispatch(onSetModalOpen(!modalOpen))}>
          {modalOpen ? 'Close Form' : 'Add New User'}
        </Button>
        <UserForm />
      </div>
      <div className="users-list-container">
        {users.map((user) => (
          <UserPreview user={user} />
        ))}
      </div>
    </div>
  );
}
