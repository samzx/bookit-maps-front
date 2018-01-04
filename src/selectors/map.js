import floors from '../locations/floors';

// Calling this function returns the map (svg) that is specified by the current filters
const selectMap = ({library, floor}) => {

    const uniqueMap = floors[library].filter((item) => {
        return item.name == floor;
    })[0].map;

    return uniqueMap;
}

export default selectMap;