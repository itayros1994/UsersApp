import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { onSetSnackBar } from '../../store/action/users.action';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackBar() {
    const dispatch = useDispatch()
  const { snackBarOpen } = useSelector((state) => state.usersModule);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(onSetSnackBar(false));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snackBarOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
        Email address is already taken
        </Alert>
      </Snackbar>
    </Stack>
  );
}
