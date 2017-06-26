import initialState from '../mocks/initialState';

export const getTodos = () => {
    return Promise.resolve(initialState.todos);
};