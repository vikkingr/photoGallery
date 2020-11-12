import React, { useState } from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

/*
  This is the main application component.
  It houses all of the components that form this app.
  

*/

function App() {

  /*
    This state is the image that the user selects to enlarge and view.
    
    setSelectedImg will be passed into the imageGrid as a prop.

  */

  const [selectedImg, setSelectedImg] = useState(null);

  /*

    Check for a selected image, if it is there, render it.
    Else, do not.

    Pass in setSelectedImg into Modal as a prop.

  */

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
