import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import AceEditor from 'react-ace';
import { useState } from 'react';
import { useRef } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/Settings';


// Import the Ace editor mode and dark theme
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-dracula';

import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';


const App = () => {

  const [jsonData, setJsonData] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);
  const message = {
    "message": "Invalid Json"
  }


  const handleJsonChange = (newValue) => {
    try {
      JSON.parse(newValue);
      setJsonData(newValue);
      setIsValidJson(true);
      console.log("jsonData ", newValue);
    } catch (error) {
      setIsValidJson(false);
    }
  };

  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="h6" component="div">
                JSON Viewer
              </Typography>
              <Box sx={{display: 'flex', gap: 3}}>
                <FavoriteBorderIcon/>
                <GitHubIcon/>
                <SettingsIcon/>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Allotment>
          <Allotment.Pane minSize={400}>
            {/* <Box sx={{ height: 'calc(100vh - 48px)' }} > */}
            <AceEditor
              mode="json"
              theme="dracula"
              width="100%"
              height="100%"
              value={jsonData}
              onChange={handleJsonChange}
              fontSize={16}
            />
          </Allotment.Pane>
          <Allotment.Pane snap>
            <Box sx={{ height: 'calc(100vh - 48px)' }}>
              {isValidJson && jsonData.trim() ? (
                <JsonView value={JSON.parse(jsonData)}
                //  style={darkTheme}
                 style={{height: '100%', fontSize: '16px'}}
                //  onEdit={(opts) => {
                //   console.log('opts:', opts)
                //   return true;
                // }}
                // components={{
                //   objectKey: ObjectKey
                // }}
                 />
              ) : (
                <JsonView value={message}
                //  theme={darkTheme}
                 style={{height: '100%', fontSize: '16px'}} />
              )}
            </Box>
          </Allotment.Pane>
        </Allotment>
      </Box>
    </>
  );
};

export default App;
