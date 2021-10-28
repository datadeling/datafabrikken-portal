import axios from 'axios';
import env from '../../../env';

interface Props {
  path: string;
  method: any;
  data?: any;
  params?: Record<string, string | number | undefined>;
}

export const organizationsApi = ({ path, method, data, params }: Props) =>
  axios({
    url: `${env.ORGANIZATION_HOST}${path}`,
    method,
    data,
    params
  }).then(({ data: responseData }) => responseData);

export const organizationsApiGet = (
  path: string,
  params?: Record<string, string | number | undefined>
) => organizationsApi({ path, method: 'GET', params });
