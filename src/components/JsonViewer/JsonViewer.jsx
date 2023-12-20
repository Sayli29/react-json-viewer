import JsonView from '@uiw/react-json-view';
import PropTypes from 'prop-types';

const JsonViewer = (props) => {
    return(
        <>
            <JsonView value={JSON.parse(props.json)}
                //  style={darkTheme}
                 style={{
                  fontSize: '16px'}}
                 />
        </>
    );
}

JsonViewer.propTypes = {
    json: PropTypes.string
};

export default JsonViewer;