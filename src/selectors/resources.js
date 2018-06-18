import floors from '../locations/floors';

// Calling this function selects relevant resources that are filtered accordingly
const selectResources = (resources = [], {text, library, floor}) => {
    if(resources.length > 0){

        // Fetch all data from specific library
        const results = resources.find(resource => resource.name.toLowerCase() == library.toLowerCase()).locations;
        
        // Combine into one object
        let objects = [];
        for (let i = 0; i< results.length; i++){
            objects = objects.concat(results[i].resources);
        }
        
        // Filter by floor
        objects = objects.filter((item) => {
            const matchers = floors[library].find( level => level.name == floor).filter;
            return matchers.some( matcher => item.name.match(matcher));
        })
        
        console.log("after filter", objects)

        // Filter by text if library exists
        if(!!library){
            const textFiltered = objects.filter((resource) => {
                // Finds matching excluding non-alphanumeric characters
                const textMatch = resource.name
                .toLowerCase().replace(/\W/g, '')
                .includes(
                    text.toLowerCase().replace(/\W/g, '')
                );
                return textMatch;
            });
            return textFiltered;
        }
        return objects;
    } else {
        return resources;
    }
}

export default selectResources;