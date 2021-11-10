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

export const removeParameter = (history: any, parameter: string) => {
  const { pathname, search } = location;

  const currentParams = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const skipParams = Object.keys(currentParams).reduce(
    (accumulator: any, key) => {
      if (key !== parameter) {
        accumulator[key] = currentParams[key];
      }
      return accumulator;
    },
    {}
  );
  const updatedParams = qs.stringify(
    { ...skipParams },
    {
      skipNulls: true,
      addQueryPrefix: true
    }
  );
  history.push(`${pathname}${updatedParams}`);
};

export const clearParameters = (history: any) => {
  const { pathname, search } = location;

  const currentParams = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const { q } = currentParams;

  const updatedParams = qs.stringify(
    { q },
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

export const getAllParameters = () =>
  qs.parse(location.search, { ignoreQueryPrefix: true }) || {};

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

export function patchSearchQuery(
  key: string,
  value: string,
  removePageFilter = true
) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  if (removePageFilter) {
    query.page = undefined;
  }
  query[key] = [...new Set([query[key], value])].filter(Boolean).join();
  return qs.stringify(query, { addQueryPrefix: true });
}

export function patchMultipleSearchQuery(filter: Record<string, any>) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  return qs.stringify({ ...query, ...filter }, { addQueryPrefix: true });
}

export const setRadioFilterValue = (
  history: any,
  selected: string,
  deselected: string[]
) => {
  const { pathname, search } = location;

  const currentParams = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const skipParams = Object.keys(currentParams).reduce(
    (accumulator: any, key) => {
      if (!deselected.includes(key)) {
        accumulator[key] = currentParams[key];
      }
      return accumulator;
    },
    {}
  );
  const updatedParams = qs.stringify(
    { ...skipParams, [selected]: true },
    {
      skipNulls: true,
      addQueryPrefix: true
    }
  );
  history.push(`${pathname}${updatedParams}`);
};
