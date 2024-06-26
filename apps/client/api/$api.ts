import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_curlay } from './test';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/test';
  const GET = 'GET';

  return {
    test: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_curlay['get']['resBody'], BasicHeaders, Methods_curlay['get']['status']>(prefix, PATH0, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_curlay['get']['resBody'], BasicHeaders, Methods_curlay['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
