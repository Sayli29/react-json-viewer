import Navbar from './components/Navbar/Navbar';
import Editor from './components/Editor/Editor';
import JsonViewer from './components/JsonViewer/JsonViewer'
import Box from '@mui/material/Box';
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useState } from 'react';
import JsonView from '@uiw/react-json-view';


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
        <Navbar />
        <Allotment style={{ height: 'calc(100vh - 48px)' }}>
          <Allotment.Pane minSize={400} >
            <Editor json={jsonData} handleJsonChange={handleJsonChange} />
          </Allotment.Pane>
          <Allotment.Pane snap>
            <Box>
              {isValidJson && jsonData.trim() ? 
                <JsonViewer json={jsonData} />
               : (
                <JsonView value={message}
                //  theme={darkTheme}
                 style={{ fontSize: '16px'}} />
              )}
            </Box>
          </Allotment.Pane>
        </Allotment>
      </Box>
    </>
  );
};

export default App;
