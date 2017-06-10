import _ from 'lodash';

import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY
} from './actions';

const initialState = [
    {
        id: _.uniqueId(),
        categoryName: "Category 1",
        childrenList: [
            {
                id: _.uniqueId(),
                categoryName: "Category 1.1"
            },
            {
                id: _.uniqueId(),
                categoryName: "Category 1.2"
            }
        ]
    },
    {
        id: _.uniqueId(),
        categoryName: "Category 2"
    }
];

const getNodeById = (tree, id) => { // todo
    const array = _.isArray(tree) ? tree : [tree];

    while (array.length) {
        const currentElement = array.shift();

        if (currentElement.id === id) {
            return currentElement;
        }
        array.push(...currentElement.children);
    }
};
/*
const deleteNodeById = (tree, id) => {
    const array = _.isArray(tree) ? tree : [tree];

    while (array.length) {
        const currentElement = array.shift();

        if (currentElement.id === id) {
            return currentElement;
        }
        array.push(...currentElement.children);
    }

    return tree;
};
*/
const addNodeByParentId = (tree, item, parentId) => {
    let array = [];
    if (parentId) {
        const parent = getNodeById(tree, parentId);
        if (!parent.children) {
            parent.children = [];
        }
        array = parent.children;
    } else if (_.isArray(tree)) {
        array = tree;
    }
    array.push(item);
    return tree;
};

export default function categoriesTree(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY: {
            action.payload.item.id = _.uniqueId(); // todo
            return addNodeByParentId(_.cloneDeep(state), action.payload.item, action.payload.parentId);
        }
        case DELETE_CATEGORY: {
            return state; //deleteNodeById(_.cloneDeep(state), action.payload.item.id);
        }
        default:
            return state;
    }
};