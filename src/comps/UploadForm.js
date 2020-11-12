import React, { useState } from 'react'
import ProgressBar from './progressBar';

/*

    Export this component as a function. 

*/

const UploadForm = () => {

    // Use state hook
    const [file, setFile] = useState(null);

    // Store an error in a state
    const [error, setError] = useState(null);

    // Create array of allowed file types
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        
        // Access submitted file
        let selected = e.target.files[0];
        
        // Store the file in the state, if there is a file, and if it is allowed.
        // If not, reset file to null, register an error
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please selected an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className='error'>{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;