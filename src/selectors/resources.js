// Calling this function selects relevant resources that are filtered accordingly

const selectResources = (resources = [], {text, library, floor}) => {
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

        // FILTER BY FLOOR
        // Filter by level len >= 3 .split('-')[1] == G
        objects = objects.filter((item) => {
            // console.log(item);
            const arr = item.name.split('-');
            if(arr.length == 3){
                return arr[1] == floor;
            } else {
                return false;
            }
        })

        // Filter by text if library exists
        if(!!library){
            const textFiltered = objects.filter((resource) => {
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