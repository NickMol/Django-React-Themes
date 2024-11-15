import {React, useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SketchPicker } from 'react-color';
import { Box, Typography } from '@mui/material';
import AxiosInstance from './Axios';
import Button from '@mui/material/Button';

const EditTheme = () =>{
    const id = window.location.pathname.split('/').pop()
    
    const [editTheme, setEditTheme] = useState([])

    console.log('edittheme',editTheme)

    const GetData = () => {
        AxiosInstance.get(`themes/${id}/`).then((res) =>{
            setEditTheme(res.data)
            setName(res.data.name)
            setMode(res.data.mode)
            setPrimaryColor(res.data.primary_color)
            setSecondaryColor(res.data.secondary_color)
        })
       
      }
    
      useEffect(() =>{
        GetData()
      },[])


    const [name, setName] = useState('')
    const [mode, setMode] = useState('')
    const [primaryColor, setPrimaryColor] = useState('')
    const [secondaryColor, setSecondaryColor] = useState('')

    const handleNameValue = (event) =>{
        setName(event.target.value)
    }

    const handleModeValue = (event) =>{
        setMode(event.target.value)
    }

    const handlePrimaryColorValue = (color) =>{
        setPrimaryColor(color.hex)
    }

    const handleSecondaryColorValue = (color) =>{
        setSecondaryColor(color.hex)
    }

    const Submission = (event) =>{
        event.preventDefault()
        AxiosInstance.put(`themes/${id}/`,{
            name : name,
            mode: mode,
            primary_color: primaryColor,
            secondary_color:secondaryColor
        })
        .then(() =>{
            window.location.href = '/'
        })
    }


    console.log('primary color',primaryColor)

    return(
        <div> 
            <form onSubmit={Submission}>
            <TextField 
                id="standard-basic" 
                value={name}
                onChange={handleNameValue}
                label="Name" 
                variant="standard"
                sx={{width:'33%'}}
                />

            <FormControl variant="standard" sx={{ marginLeft: '20px', width:'33%',minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Mode</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={mode}
                    onChange={handleModeValue}
                    label="Mode"
                    >
                    <MenuItem key={1} value={'light'}>Light</MenuItem>
                    <MenuItem key={2} value={'dark'}>Dark</MenuItem>

                    </Select>
            </FormControl>

            <Box sx={{width:'33%', marginTop:'30px'}}>
                <InputLabel id="demo-simple-select-standard-label">Primary Color</InputLabel>
          
                <SketchPicker
                    onChange={handlePrimaryColorValue}
                    color={primaryColor}
                />
            </Box>

            <Box sx={{width:'33%', marginTop:'30px'}}>
                <InputLabel id="demo-simple-select-standard-label">Secondary Color</InputLabel>
          
                <SketchPicker
                    onChange={handleSecondaryColorValue}
                    color={secondaryColor}
                />
            </Box>

            <Button sx={{width:'100%', marginTop: '10px'}} type="submit" variant="contained">Submit theme</Button>
            
            </form>
           
        </div>
    )

}

export default EditTheme