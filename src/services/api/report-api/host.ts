import axios from 'axios';
import env from '../../../env';

interface Props {
  path: string;
  method: any;
  params: any;
}

export const reportApi = ({ path, method, params }: Props) =>
  axios({
    url: `${env.REPORT_API_HOST}${path}`,
    method,
    params
  })
    .then(({ data }) => data)
    .catch(() => {});

export const reportApiGet = (path: string, params: any) =>
  reportApi({ path, method: 'GET', params });
