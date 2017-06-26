import _ from 'lodash';

export const getParentId = (state, id) => {
    let parentId = null;

    _.forOwn(state, (value, key) => {
        if (_.isArray(value.childrenList) &&
            _.includes(value.childrenList, id)) {
            parentId = key;
        }
    });
    return parentId;
};

export const deleteCategoryFromStructure = (state, id) => {
    let newState = {...state};
    const parentId = getParentId(state, id);
    const array = [id];

    if (newState[parentId]) {
        _.remove(newState[parentId].childrenList, value => value === id);
    }

    while (array.length) {
        const currentNodeId = array.pop();

        if (newState[currentNodeId].childrenList) {
            array.push(...newState[currentNodeId].childrenList);
        }

        delete newState[currentNodeId];
    }
    return newState;
};