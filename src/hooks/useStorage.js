// Import a couple of hooks
// Import the projectStorage from the config file
import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

// Create the hook (small chunk of re usable code)
// So that these hooks can be used in any needy component

// Handle the file upload and return useful values about the upload

const useStorage = (file) => {

    // Create 3 pieces of state
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    // We want to use the storage SDK to upload the file in the hook.
    // We want to get the image url and store it in the database
    // The images can be loaded from the database into React components
    
    useEffect(() => {

        // References
        const storageRef = projectStorage.ref(file.name);

        // Data reference to collection
        // If one is not made, Firebase makes one for me
        const collectionRef = projectFirestore.collection('images')

        // Upload the file to the reference
        storageRef.put(file).on('state_changed', (snap) => {

            // Figure out progress of upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

            // Set the value of progress to percentage
            setProgress(percentage);

        }, (err) => {

            // Set the error if there is an error
            setError(err);

        }, async () => {

            // Get the URL of the image that was uploaded
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: url, createdAt: createdAt });

            // Set the URL of the image
            // This is so we can access it and store it in a database
            setUrl(url);

        })

    }, [file]);

    return { progress, url, error }

}

export default useStorage;