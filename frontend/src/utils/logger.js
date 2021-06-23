const info = (...params) => console.log(...params);

const error = (...params) => console.log(...params);

const logger = { info, error };

export default logger;