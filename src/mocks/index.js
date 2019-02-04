import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import _ from 'lodash';

import initialState from './initialState';
import { DELAY } from '../api/constants/config';

export const initialize = () => {
    var mock = new MockAdapter(axios, { delayResponse: DELAY });

    mock.onGet('/api/getCategories').reply(200, initialState.categories);

    mock.onPost('/api/createCategories').reply(200, () => [200, Date.now()]);

    mock.onPost(/\/api\/updateCategory\/\d+/).reply(200);

    mock.onPost(/\/api\/deleteCategory\/\d+/).reply(200, null);

    mock.onGet('/api/getTodos').reply(200, initialState.todos);

    mock.onPost('/api/createTodo').reply(200, () => [200, Date.now()]);

    mock.onPost(/\/api\/updateTodo\/\d+/).reply(200);

    mock.onPost(/\/api\/deleteTodo\/\d+/).reply(200);

    mock.onPost(/\/api\/moveTodo\/\d+\/\d+\/\d+/).reply(200);
};