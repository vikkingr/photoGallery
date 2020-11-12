import React from 'react';

/*

  In this component, I will render the name of this project and a statement of what to do.

  It's a pretty simple component.
  Use header tags to display a potential brand name and welcome message. I just say enjoy.
  Make sure to have title as the class name of the main div to be rendered, for styling.

*/

const Title = () => {
  return (
    <div className="title">
      <h1>Robi's Photo Gallery</h1>
      <h2>Enjoy</h2>
      <p>Hover over a picture and click to view! Or, press the button and share a photo.</p>
    </div>
  )
}

export default Title;