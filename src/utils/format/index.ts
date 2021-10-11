export const stripFormatPrefix = (format: string) =>
  format.replace(/^(MEDIA_TYPE|FILE_TYPE|UNKNOWN)\s*/, '');
