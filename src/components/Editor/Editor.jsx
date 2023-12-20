import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-dracula';
import PropTypes from 'prop-types';

const Editor = (props) => {
    return(
        <>
            <AceEditor
              mode="json"
              theme="dracula"
              width="100%"
              height="100%"
              value={props.json}
              onChange={props.handleJsonChange}
              fontSize={16}
            />
        </>
    );
}

Editor.propTypes = {
    json: PropTypes.string,
    handleJsonChange: PropTypes.func
};

export default Editor;