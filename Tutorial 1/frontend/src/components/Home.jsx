import {React} from 'react'
import { Box } from '@mui/material'

const Home = () =>{
    return(
        <div> 
            <Box sx={{width:'100%', height:'200px', backgroundColor:'secondary.main'}}>
                First box
            </Box>

            <Box sx={{width:'100%', height:'200px', backgroundColor:'primary.main'}}>
                Second box
            </Box>

        </div>
    )

}

export default Home