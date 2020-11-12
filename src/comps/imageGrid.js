import React from 'react';
import useFirestore from '../hooks/useFirestore';

/*
    Import framer motion:
    This is a package for handling some awesome effects for transitions.
    CSS of course.
*/

import { motion } from 'framer-motion';

/*
    Destructure the property: setSelectedImg
    to use the url of the image. This will allow me to display it.
*/

const ImageGrid = ( {setSelectedImg} ) => {

    // Get the data we need
    const { docs } = useFirestore('images');
    console.log(docs);


    // Check if docs exist.
    // Use map to cycle through docs to output template for each document
    // Return a div that will contain all pictures as they are uploaded
    // Use the id of each document as the key

    /*
        When the user clicks on an image, it will trigger the onClick event.
        This triggers a function that will call the setSelectedImg()
        function and it will take the doc.url as a parameter.
        This is passed in so the function knows which photo to use
        for enlargement and viewing purposes.
    */

    // Last updated 10/9/2020 
    // Video was at 59:00 or so

    return (

        <div className="img-grid">
            
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={ doc.id }
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="Upload here."
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .5 }}
                    />
                </motion.div>
            )) }

        </div>

    )

}

export default ImageGrid;