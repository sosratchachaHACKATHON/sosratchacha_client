import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Email({ Email, handleChangeEmail }) {
  
    return (
      <div>
        <TextField
        id="outlined-search" 
        label="Email" 
        type="search" 
        sx={{width: '300px', m: 2}}
        value={Email}
        onChange={(e)=>handleChangeEmail(e)}/>
      </div>
  );
}