import { datasetPreviewApiPost } from './host';

export const getDatasetPreview = (url: string, rows: number) =>
  datasetPreviewApiPost({ url, rows });

export const extractDatasetPreview = (response: any) => response.data;
