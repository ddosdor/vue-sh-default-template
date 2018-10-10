/* eslint-disable */
const API = {
  get: (...args) => {
    const fakeResponse = {
      data: {
        data: {}
      }
    }
    return Promise.resolve(fakeResponse);
  },
  post: (...args) => {
    const fakeResponse = {
      data: {
        data: {}
      }
    }
    return Promise.resolve(fakeResponse);    
  },
}

export default {
  API
}
