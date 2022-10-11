import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import  moment, { Moment } from "moment";
import toast from "react-hot-toast";

export const CreatePlayer = () => {
 const [position, setPosition] = useState('');
  const [dob, setDob] = useState<Moment>(moment().subtract(16, 'years'));
 return (<>

<label htmlFor="create-player-form" className="py-4 px-7">Create Player</label>

<input type="checkbox" id="create-player-form" className="modal-toggle" />
<label htmlFor="create-player-form" className="modal cursor-pointer">
   <label className="modal-box bg-white relative" htmlFor="">
    <div className="h-full flex-col flex gap-4">
     <TextField id="standard-basic" label="Full Name" variant="standard" />
    <Autocomplete
       disablePortal
       id="Team List"
           options={['Durham College', 'Ontario Tech University', 'University of Waterloo', 'Trent University', 'Toronto Metropolitan University', 'University of Toronto']}
       sx={{ width: 300 }}
       renderInput={(params) => <TextField {...params} variant="standard" label="Team" />}
     />
      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Position</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
          label="Position"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={""}>Goalkeeper</MenuItem>
          <MenuItem value={""}>Defender</MenuItem>
          <MenuItem value={""}>Midfielder</MenuItem>
          <MenuItem value={""}>Forward</MenuItem>
          <MenuItem value={""}>Striker</MenuItem>
          <MenuItem value={""}>Winger</MenuItem>
          <MenuItem value={""}>Full Back</MenuItem>
          <MenuItem value={""}>Center Back</MenuItem>
        </Select>
     </FormControl>
     <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Date of Birth"
       value={dob}
       onChange={(newValue) => 
     newValue && setDob(newValue)
    }
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizationProvider>
     <button className="px-7 py-3 bg-red-900 text-white rounded-lg" onClick={() => toast.success("Player Created")}>
      Create
     </button>
    </div>
    
  </label>
</label>
 </>)
}