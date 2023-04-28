import request from '@/utils/request';


export const requestRes = () => {
  return request({
    url: '/api/xxx',
    method: 'get'
  });
}
