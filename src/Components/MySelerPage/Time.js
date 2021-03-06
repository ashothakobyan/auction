import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

export default function Time({errorItems,setItem,item}) {
  const [value, setValue] = React.useState();
  return (
    <LocalizationProvider   dateAdapter={AdapterDateFns}>
      <Stack style={{
        collor:"red"
      }} spacing={3}>
        <MobileDateTimePicker
        maxTime = {errorItems.date?new Date(0, 0, 0, 18, 45):null}
          value={value}
          onChange={(newValue) => {
            setItem({
              ...item,
              date:newValue
            })
            setValue(newValue)
          }}
          renderInput={(params) => <TextField   {...params} />}
        />
       
      </Stack>
    </LocalizationProvider>
  );
}