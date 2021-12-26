import config from '../config.json';

const httpService = {
  get: (endPoint) => fetch(`${config.apiEndPoint}${endPoint}`),
  post: (endPoint, data) => fetch(`${config.apiEndPoint}${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
};

export default httpService;
