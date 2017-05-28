const initialState = {
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
};

export default function todos(state = initialState) {
    return state;
};