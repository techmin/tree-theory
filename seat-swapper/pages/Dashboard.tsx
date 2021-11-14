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
            <div>
            <Box
                sx={{
                    textAlign:'center',
                    m:1,
                    width: 400,
                    height: 100,
                    backgroundColor: 'primary.dark',
                }}
            >
                Swap offer to A2(Window)

            </Box>
            </div>     
        </Typography>

    )
}

export default Dashboard
