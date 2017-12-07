export default (resourceState = [], action) => {
    switch (action.type){
        case 'UPDATE_RESOURCES':
            return  action.updates;
        default:
            return resourceState;
    }
};