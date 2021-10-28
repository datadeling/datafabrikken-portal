import axios from 'axios';
import env from '../../../env';

interface Props {
  path: string;
  method: any;
  data?: any;
}

export const organizationsCatalogApi = ({ path, method, data }: Props) =>
  axios({
    url: `${env.ORGANIZATION_CATALOGUE_HOST}${path}`,
    headers: {
      Accept: 'application/json'
    },
    method,
    data
  })
    .then(({ data: responseData }) => responseData)
    .catch(() => null);

export const organizationsCatalogApiGet = (path: string) =>
  organizationsCatalogApi({ path, method: 'GET' });
