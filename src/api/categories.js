import initialState from '../mocks/initialState';

export const getCategories = () => {
    return Promise.resolve(initialState.categories);
};