const baseURL = 'https://geo.ipify.org/api/v2/country,city';

const options = {
    query: {
        apiKey: import.meta.env.VITE_API_KEY_IPIFY,
        ipAddress: '',
        domain: '',
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
  
export const getIpData = async (ip) => {
    options.query.ipAddress = ip;
    options.query.domain = ip;
    try {
      const response = await fetch(buildUrl(options), {
        method: 'GET'
    });
    return response.json()
    } catch(error) {
      return 'error: ' + error
    }
};