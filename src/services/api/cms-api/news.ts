import { deserialize } from 'deserialize-json-api';
import { cmsApiGet } from './host';

export const getNews = (pageLimit: number) =>
  cmsApiGet(
    `/node/news?filter[status]=1&page[limit]=${pageLimit}&&sort=-created&include=field_image_some,field_image_some.field_media_image`
  ).then(deserialize);

export const getNewsPage = (id: string) =>
  cmsApiGet(
    `/node/news/${id}?include=field_modules,field_modules.field_image,field_modules.field_image.field_media_image,field_global_taxonomy,field_modules.field_remote_video`
  ).then(deserialize);

export const extractData = (response: any) => response.data ?? [];
