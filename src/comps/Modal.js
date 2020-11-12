/*
 Let's create a modal to view photos.
 It will zoom in to the photos that are displpayed in the main page.
 A pop up (modal) will appear with the full-size of the original image.
*/

import React from 'react';

// Import framer-motion for CSS effects

import { motion } from 'framer-motion';

/*
    
    This function represents the Modal component.
    It returns a div called the backdrop.
    Inside of it is the picture the user will want to inspect.

    Pass in setSelectedImg into Modal as a prop to alternate from
    null (when there is no picture selected), and to the doc.url
    of the img when it is selected.

*/

const Modal = ({ selectedImg, setSelectedImg }) => {


    /*

        handleClick will set the selected img to null.
        This will close the Modal!

        We have to check if the area where the user clicks is the backdrop.
        If the user clicks on the image itself, it should not close.
        However, if the user clicks anywhere on the backdrop,
        it will close as the value of the image is now null.

    */

    const handleClick = (e) => {

        if(e.target.classList.contains( 'backdrop' ))
        {

            setSelectedImg(null);

        }

    }

    return (

        <motion.div className="backdrop" onClick={handleClick}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        
        >

            <motion.img src={selectedImg} alt="There should be an enlarged photo here."
            
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            
            ></motion.img>

        </motion.div>

    )// end return

}// end component

export default Modal;