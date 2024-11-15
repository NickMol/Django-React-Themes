import {React} from 'react'
import { Box } from '@mui/material'

const Home = ({themes}) =>{
    console.log('homedata', themes)
    return(
        <div> 
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
            {
                themes.map((theme) =>(

                    <Box sx={{boxShadow:3, width:'20%', margin:'15px', padding:'10px'}}>
                         <Box sx={{fontWeight:'bold'}}>{theme.name}</Box>
                         <Box sx={{backgroundColor: theme.primary_color, wdith:'100%', height:'15px'}}></Box>
                         <Box sx={{backgroundColor: theme.secondary_color, wdith:'100%',height:'15px'}}></Box>
                         <Box>
                            <a href={`/edit/${theme.id}`}> Link to {theme.name}</a>
                         </Box>
                       
                    </Box>

                ))
            }
            </Box>
            

        </div>
    )

}

export default Home