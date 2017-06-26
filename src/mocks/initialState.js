import _ from 'lodash';

export const rootIds = [_.uniqueId(), _.uniqueId(), _.uniqueId(), _.uniqueId()];

export default {
    categories: {
        [rootIds[0]]: {
            categoryName: 'Category 1',
            childrenList: [ rootIds[2], rootIds[3]]
        },
        [rootIds[1]]: {
            categoryName: 'Category 2'
        },
        [rootIds[2]]: {
            categoryName: 'Category 1.1'
        },
        [rootIds[3]]: {
            categoryName: 'Category 1.2'
        }
    },
    todos: {
        1: [
            {
                id: 1,
                title: 'Task 1',
                isDone: true,
                description: '11111111111111'
            },
            {
                id: 2,
                title: 'Task 2',
                isDone: false,
                description: '11111111111111'
            },
            {
                id: 3,
                title: 'Task 3',
                isDone: false,
                description: '11111111111111'
            }
        ]
    }
};
