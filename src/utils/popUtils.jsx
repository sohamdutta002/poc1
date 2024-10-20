import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FilledInput from '@mui/material/FilledInput';
import { useDispatch } from 'react-redux';
import {login} from '../redux/actions/authActions'


export function FormUtils() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [showPassword, setShowPassword] = React.useState(false); 
    const [data, setData] = React.useState({
      firstName:'',
      lastName:'',
      email:'',
      password:''
    })
    const dispatch=useDispatch()
    const handleChange=(e)=>{
      const{name,value}=e.target
      setData(prevData=>({
        ...prevData,
        [name]:value
      }))
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      handleClose()
      console.log("submitted")
      dispatch(login(data))
    }
    
    return (
    <div>
      <Button onClick={handleOpen}>Form modal</Button>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} component="form" noValidate autoComplete='on' onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex gap-2'>
                <TextField
                required
                id="outlined-error"
                label="First Name"
                name='firstName'
                value={data.firstName}
                onChange={handleChange}
                />
                <TextField
                id="outlined-error-helper-text"
                label="Last Name"
                name='lastName'
                value={data.lastName}
                onChange={handleChange}
                />
            </div>
            <div className='flex flex-col gap-5'>
                <TextField
                required
                id="email"
                label="Email"
                name='email'
                value={data.email}
                onChange={handleChange}
                />
                <FormControl sx={{width: 'full' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <Button variant="contained" type='submit'>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}


export function TextUtils() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <div>
      <Button onClick={handleOpen}>Text modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export function ErrorUtils() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
    <div>
      <Button onClick={handleOpen}>Error</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
    return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}
