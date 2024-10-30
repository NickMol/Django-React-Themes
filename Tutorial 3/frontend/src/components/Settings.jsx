import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Settings = ({options,value,handleChange}) =>{
    

    return(
        <div> 
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pick a theme:</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Pick a theme:"
                    onChange={handleChange}
                    >
                        {
                            options.map((option) =>(
                                <MenuItem value={option.value}>{option.name}</MenuItem>
                            ))
                        }
                        
                    
                    </Select>
                </FormControl>
           
        </div>
    )

}

export default Settings
