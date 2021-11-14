import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { typography } from '@mui/system';
const Dashboard = () => {
    return (
        <Typography  component="div"
        >
            <Typography variant="h1">
                <Box sx={{textAlign:'center',m:1}}> SeatSwapper </Box>
            </Typography> 
            <div
                style={{marginLeft:"40%", marginTop:"1em"}}
            >
            <Box
                sx={{
                    textAlign:'center',
                    m:1,
                    width: 400,
                    height: 100,
                    backgroundColor: 'warning.main',
                }}
            >
                Swap offer to A2(Window)

            </Box>
            </div>     
            <div
                style={{marginLeft:"40%", marginTop:"1em"}}
            >
            <Box
                sx={{
                    textAlign:'center',
                    m:1,
                    width: 400,
                    height: 100,
                    backgroundColor: 'error.light',
                }}
            >
                Request to change seat with B1(aiel) 

            </Box>
            </div>     
 
        </Typography>

    )
}

export default Dashboard
