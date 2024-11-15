import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AxiosInstance from './Axios';
import Button from '@mui/material/Button';

const Settings = ({options,value,handleChange, counter, activetheme}) =>{

    const Submission = (event) =>{
        event.preventDefault()
        if (counter === 0) {
            AxiosInstance.post(`activetheme/`,{
                theme : value
            })
            .then(() =>{
                window.location.reload()
            })
        }
        else{
           AxiosInstance.put(`activetheme/${activetheme[0].id}/`,{
                theme : value
           })
           .then(() =>{
            window.location.reload()
            })
        }
        
    }
    

    console.log('form counter', counter)

    return(
        <div> 
            <form onSubmit={Submission}>
                <p>We have {counter} active themes</p>
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
                                <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                            ))
                        }
                        
                    
                    </Select>
                </FormControl>

                <Button sx={{marginTop:'30px', width:'100%'}} type="submit" variant="contained">Submit theme</Button>

            </form>
                
           
        </div>
    )

}

export default Settings
