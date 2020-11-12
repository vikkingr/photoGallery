import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

// Create hook using a function that takes the collection to retrieve docs from
const useFirestore = (collection) => {

    // Set up state for retrieved documents
    const [docs, setDocs] = useState([]);

    // This hook takes a callback that executes when the collection dependency changes
    useEffect(() => {
        
        // Use projectFirestore to reach into collection
        // And listen for documents that are present
        // This is real time, using snapshot 'snap'
        // Must order documents by createdAt using timestamp

        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {

                // Create array for storing document data
                // Using forReach, push data using the spread operator
                // The spread operator:
                // 1. Gets all properties from the url
                // 2. Spread the data fields

                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });

                // Update documents with documents array using setDocs in hook
                setDocs(documents);
            });
        
        // Return the clean-up function
        // Unsubscribe from collection when we no longer use it
        return () => unsub();

    }, [collection])

    //return the documents once we have them
    return { docs };

}

export default useFirestore;