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

export const deleteCategoryFromStructure = (data, id) => {
    let newData = {...data};
    const parentId = getParentId(data, id);
    const array = [id];

    if (newData[parentId]) {
        _.remove(newData[parentId].childrenList, value => value === id);
    }

    while (array.length) {
        const currentNodeId = array.pop();

        if (newData[currentNodeId].childrenList) {
            array.push(...newData[currentNodeId].childrenList);
        }

        delete newData[currentNodeId];
    }
    return newData;
};

export const addCategoryToStructure = (data, { parentId, itemId, item }) => {
    let newData = { ...data };

    if (parentId) {
        newData = {
            ...data,
            [parentId]: {
                ...data[parentId],
                childrenList: [...data[parentId].childrenList || [], itemId]
            }
        };
    }
    newData[itemId] = item;
    return newData;
};