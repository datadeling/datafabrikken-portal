import axios from 'axios';

import env from '../../../env';

const { FDK_DATASET_PREVIEW_API_KEY } = env;

interface Props {
  method: any;
  data?: any;
}

export const datasetPreviewApi = async ({ method, data }: Props) => {
  const csrf = await axios({
    url: `/api/dataset/preview/csrf`,
    headers: {
      'X-API-KEY': FDK_DATASET_PREVIEW_API_KEY
    },
    withCredentials: true,
    method: 'GET'
  }).then((r: { data: any }) => r.data);

  return axios({
    url: `/api/dataset/preview`,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': FDK_DATASET_PREVIEW_API_KEY,
      'X-XSRF-TOKEN': csrf.token
    },
    withCredentials: true,
    method,
    data
  }).then((r: { data: any }) => r.data);
};

export const datasetPreviewApiPost = (data: any) =>
  datasetPreviewApi({ method: 'POST', data });
