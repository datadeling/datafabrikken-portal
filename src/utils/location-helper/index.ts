import qs from 'qs';

import { addValue } from '../string-helper';

export const setParameter = (
  history: any,
  parameters: Record<string, string | number | null>
) => {
  const { pathname, search } = location;

  const currentParams = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const updatedParams = qs.stringify(
    { ...currentParams, ...parameters },
    {
      skipNulls: true,
      addQueryPrefix: true
    }
  );
  history.push(`${pathname}${updatedParams}`);
};

export const getParameter = (parameter: string) =>
  (qs.parse(location.search, { ignoreQueryPrefix: true })?.[
    parameter
  ] as string) ?? '';

export function removeValue(listAsString: string, value: string) {
  const list: string[] = listAsString.split(',');
  return list.filter(item => item !== value).join() || undefined;
}

export const setMultiselectFilterValue = (
  history: any,
  filterName: string,
  value: string,
  appendValue = true
) => {
  const { pathname, search } = location;
  const currentParams = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const currentFilterValue = currentParams[filterName];

  const updatedFilterValue = appendValue
    ? addValue(currentFilterValue, value)
    : removeValue(currentFilterValue as string, value);

  const updatedParams = qs.stringify(
    { ...currentParams, ...{ [filterName]: updatedFilterValue }, page: null },
    {
      skipNulls: true,
      addQueryPrefix: true
    }
  );

  history.push(`${pathname}${updatedParams}`);
};
