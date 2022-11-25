import axios from 'axios';

import env from '../../../env';
import { cookieValue } from '../../../utils/common';

const { FDK_DATASET_PREVIEW_API_KEY } = env;

interface Props {
  method: any;
  data?: any;
}

export const datasetPreviewApi = async ({ method, data }: Props) =>
  (await axios({
    url: `/api/dataset/preview`,
    headers: {
      'X-API-KEY': FDK_DATASET_PREVIEW_API_KEY
    },
    withCredentials: true,
    method: 'GET'
  })) &&
  axios({
    url: `/api/dataset/preview`,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': FDK_DATASET_PREVIEW_API_KEY,
      'X-XSRF-TOKEN': cookieValue('DATASET-PREVIEW-CSRF-TOKEN')
    },
    withCredentials: true,
    method,
    data
  }).then(r => r.data);

export const datasetPreviewApiPost = (data: any) =>
  datasetPreviewApi({ method: 'POST', data });
