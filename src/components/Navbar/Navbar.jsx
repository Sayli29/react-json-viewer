import {
    Box,
    AppBar,
    Toolbar,
    Typography
} from '@mui/material'; 

import {
    FavoriteBorder,
    GitHub,
    Settings
} from '@mui/icons-material';


const Navbar = () => {
    return(

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="h6" component="div">
                JSON Viewer
              </Typography>
              <Box sx={{display: 'flex', gap: 3}}>
                <FavoriteBorder/>
                <GitHub/>
                <Settings/>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        
    );
}

export default Navbar;