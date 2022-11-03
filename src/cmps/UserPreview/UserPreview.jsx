import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { onDeleteUser, onSetModalOpen, onSetUserToEdit } from '../../store/action/users.action';
import { ConfirmDeleteModal } from '../ConfirmModal/ConfirmDeleteModal';

export function UserPreview({ user }) {
  const dispatch = useDispatch();

  const deleteUser = (user) => {
    dispatch(onDeleteUser(user));
  };

  const updateUser = (user) => {
    dispatch(onSetModalOpen(true));
    dispatch(onSetUserToEdit(user));
  };

  return (
    <div>
      <Card sx={{ maxWidth: 300, minWidth:300, minHeight: 400, maxHeight:400, justifyContent: 'space-between',  margin: 2 }}>
        <CardMedia component="img" alt="green iguana" height="140" image={user.picture.medium} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name.first} {user.name.last}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {user.email}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {user.location.country}, {user.location.city}, {user.location.street.name}
          </Typography>
          <Typography gutterBottom variant="h9" component="div">
            {user.login.uuid}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => updateUser(user)} size="small">
            Update User
          </Button>
          <ConfirmDeleteModal deleteUser={deleteUser} user={user} />
        </CardActions>
      </Card>
    </div>
  );
}
