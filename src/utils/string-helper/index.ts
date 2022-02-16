export function addValue(listAsString: any, value: string) {
  return (listAsString || '')
    .split(',')
    .concat(value)
    .filter((v: any) => !!v)
    .join(',');
}

export const isAbsoluteUrl = (url: string) =>
  new RegExp('^(?:[a-z]+:)?//', 'i').test(url) ?? false;
