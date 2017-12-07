// Calling this function selects relevant resources that are filtered accordingly

export default (resources = [], {text, library, floor}) => {
    if(resources.length > 0){

        // Fetch all data from specific library
        const results = resources.filter((resource) => {
            const libraryMatch = resource.name.toLowerCase() == library.toLowerCase();
            return libraryMatch;
        })[0].locations;
    
        // Combine into one object
        let objects = [];
        for (let i = 0; i< results.length; i++){
            objects = objects.concat(results[i].resources);
        }

        if(!!library){
            const textFiltered = objects.filter((resource) => {
                const textMatch = resource.name.toLowerCase().includes(text.toLowerCase());
                return textMatch;
            });

            return textFiltered;
        }
    
        // Render specified locations
        return objects;
    } else {
        return resources;
    }
}
