export const customLoggerMiddleware = store => next => action => {
    console.log('Custom logger', action.type);
    next(action);
};

