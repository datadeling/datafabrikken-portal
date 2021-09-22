import axios from 'axios';

import env from '../../../env';

const { COMMUNITY_API_HOST } = env;

interface Props {
  path: string;
  method: any;
  data?: any;
}

export const communityApi = async ({ path, method, data }: Props) =>
  axios({
    url: `${COMMUNITY_API_HOST}/api${path}`,
    headers: {
      'Content-Type': 'application/json'
    },
    method,
    data
  }).then(r => r.data);

export const communityApiGet = (path: string) =>
  communityApi({ path, method: 'GET' });
