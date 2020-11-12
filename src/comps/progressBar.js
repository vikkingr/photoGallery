/*

    Progress bar.

    This code uses hooks to update a progress bar for newly uploaded image files.

*/

import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

/*

    Import Framer-Motion for more CSS effects.

*/

import { motion } from 'framer-motion';

// Let's create the progress bar


const ProgressBar = ({file, setFile}) => {

    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile])

    return (

        <motion.div className="progress-bar" 

            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            
        ></motion.div>

    )
}

export default ProgressBar;