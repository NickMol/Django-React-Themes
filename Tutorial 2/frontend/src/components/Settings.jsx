import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Settings = ({isDarkMode, onChange}) =>{
    return(
        <div> 
            
            <FormControlLabel 
                control={<Switch checked={isDarkMode} onChange={onChange}/>} 
                label={isDarkMode ? "Dark Mode" : "Light Mode"}
            />   
        </div>
    )

}

export default Settings