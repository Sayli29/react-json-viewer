import { useState } from 'react';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { lightTheme } from '@uiw/react-json-view/light';
import { nordTheme } from '@uiw/react-json-view/nord';
import { githubLightTheme } from '@uiw/react-json-view/githubLight';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';
import { vscodeTheme } from '@uiw/react-json-view/vscode';
import { gruvboxTheme } from '@uiw/react-json-view/gruvbox';
import { monokaiTheme } from '@uiw/react-json-view/monokai';
import { basicTheme } from '@uiw/react-json-view/basic';
import AceEditor from 'react-ace';
// import './style.css';
import { Grid, Box, Typography, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import { TriangleArrow } from '@uiw/react-json-view/triangle-arrow';
import { TriangleSolidArrow } from '@uiw/react-json-view/triangle-solid-arrow';

const App = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [jsonData, setJsonData] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedIconStyle, setSelectedIconStyle] = useState('');

  const themes = ['darkTheme',
   'lightTheme',
   'nordTheme',
   'githubLightTheme',
   'githubDarkTheme',
   'vscodeTheme',
   'gruvboxTheme',
   'monokaiTheme',
   'basicTheme'];

  const iconStyles = [
    'triangle',
    'square',
    'circle',
  ];
  

  const intialData = {
    "message":"There is no data entered yet."
   }

  
  const handleResetClick = () => {
    setJsonInput('');
    setJsonData(null);
  };

  // const handleJsonInputChange = (value) => {
  //   setJsonInput(value);
  //   try {
  //     const parsedJson = JSON.parse(value);
  //     setJsonData(parsedJson);
  //   } catch (error) {
  //     // Handle JSON parsing errors
  //     setJsonData(null);
  //   }
  // };

  const handleJsonInputChange = (value) => {
    setJsonInput(value);
    setJsonData(null); 
  };

  const handleJsonViewClick = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setJsonData(parsedJson);
    } catch (error) {
      setJsonData(null);
      console.error('Invalid JSON:', error);
    }
  };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleIconStyleChange = (event) => {
    setSelectedIconStyle(event.target.value);
  };

  return (
    <>
      <Box>
        <Box
          pl={2}
          sx={{
            height: '6vh',
            width: '100vw',
            // border: '1px solid red',

          }}>
          <Typography variant='h5'
            sx={{ fontWeight: 'bold' }} >Json Viewer</Typography>
        </Box>


        <Grid container spacing={2}>

          <Grid item sm={6} xs={12}>
            <AceEditor
              mode="json"
              theme="monokai"
              onChange={handleJsonInputChange}
              name="json-editor"
              value={jsonInput}
              style={{ width: '50vw', height: '94vh', fontSize: '16px' }}
            ></AceEditor>
            {/* </Box> */}
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box sx={{marginBottom: '10px'}}>
              <Button variant="outlined" sx={{ marginRight: '5px' }}  onClick={handleResetClick}>Reset</Button>
              <Button variant="contained" onClick={handleJsonViewClick}>Json Viewer</Button>
            </Box>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                  <Select
                    labelId="theme-select-label"
                    id="theme-select"
                    value={selectedTheme}
                    onChange={handleThemeChange}
                    label = "Theme"
                  >
                    {/* <MenuItem value="" disabled>
                    Select Theme
                    </MenuItem>
                    {theme.map((item, index) => (
                      <MenuItem key={index} value={item}>
                    {item}
                    </MenuItem>
                    ))} */}

                  {themes.map((theme) => (
                <MenuItem key={theme} value={theme}>
                  {theme}
                </MenuItem>
              ))} 
                    
                  </Select>
                </FormControl>

              </Grid>
              <Grid item sm={4} xs={6}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon Style</InputLabel>
                  <Select
                    labelId="icon-style-select-label"
                    id="icon-style-select"
                    value={selectedIconStyle}
                    onChange={handleIconStyleChange}
                    label="icon style"
                  >
                    {/* <MenuItem value="" disabled>
                    Select Theme
                    </MenuItem>
                    {theme.map((item, index) => (
                      <MenuItem key={index} value={item}>
                    {item}
                    </MenuItem>
                    ))} */}
                    {iconStyles.map((iconStyle) => (
                    <MenuItem key={iconStyle} value={iconStyle}>
                      {iconStyle}
                    </MenuItem>
                    ))}

                  </Select>
                </FormControl>

              </Grid>
              <Grid item sm={4} xs={6}>
                {/* add something here */}
              </Grid>
            </Grid>
            <Box
            sx={{
              height: "76vh",
              width: '49vw',
              // border: '1px solid red',
              marginTop: '12px',
              backgroundColor: ''
            }}>
               {jsonData ? (
            <JsonView
              value={jsonData}
              // style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
              theme={selectedTheme}
              iconStyle={selectedIconStyle} 
            />
          ) : (
             <JsonView value={intialData} theme={selectedTheme}
             iconStyle={selectedIconStyle} />
         )}

            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
