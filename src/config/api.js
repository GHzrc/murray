/**
 * Created by bear on 2017/12/26.
 */

export const serverUrl = {
  //dev: 'http://10.70.103.212:9090',
  dev: 'http://127.0.0.1:9090/',
  pro: ''
};
export const ctsApi = {
  cts: 'api/users'
};
export const authApi = {
  authorize: 'api/users/authorize',
  register: 'api/users/register',
  modify: `api/users/${'userId'}/${'field'}`,
  profile: `api/users/profile/${'userId'}`
};

export const dynamicApi = {
  topics: 'api/topics',
  article: 'api/topics/<id>'
};
