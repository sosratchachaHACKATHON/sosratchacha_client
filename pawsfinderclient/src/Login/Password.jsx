import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Pwd({ pwd, handleChangePwd }) {
  return (
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{width: '300px', m: 2}}
          value={pwd}
          onChange={(e)=>handleChangePwd(e)}
        />
      </div>
  );
}