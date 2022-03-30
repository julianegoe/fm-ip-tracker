const apiKey = '';
const baseURL = 'https://geo.ipify.org/api/v2/country,city';

const options = {
    query: {
        apiKey: apiKey,
        ipAddress: '',
    }
};

const buildUrl = (options) => {
    const url = new URL(`${baseURL}`);
  
    const queryParams = options?.query;
    if (queryParams) {
      Object.keys(queryParams).forEach((key) => {
        url.searchParams.append(key, queryParams[key]);
      });
    }
  
    return url.toString();
  };
  
export const getIpData = async (ipAddress) => {
    options.query.ipAddress = ipAddress;
    const response = await fetch(buildUrl(options), {
        method: 'GET'
    });
    return response.json()
};