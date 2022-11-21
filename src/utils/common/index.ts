import type { EnvironmentVariables } from '../../types';

function assertIsDefined<T>(
  key: string,
  value: T
): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`Expected ${key} to be defined, but received ${value}`);
  }
}

export const validateEnv = (
  env: EnvironmentVariables
): EnvironmentVariables => {
  Object.entries(env).forEach(([key, value]) => assertIsDefined(key, value));
  return env;
};

export const cookieValue = (name: string) =>
  document.cookie
    .split('; ')
    .filter(row => row.startsWith(`${name}=`))
    .map(c => c.split('=')[1])[0];
