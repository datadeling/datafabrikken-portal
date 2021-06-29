export function addValue(listAsString: any, value: string) {
  return (listAsString || '')
    .split(',')
    .concat(value)
    .filter((v: any) => !!v)
    .join(',');
}
