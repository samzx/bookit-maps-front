import floors from '../locations/floors';

const selectMap = ({library, floor}) => {

    const uniqueMap = floors[library].filter((item) => {
        return item.name == floor;
    })[0].map;

    return uniqueMap;
}

export default selectMap;