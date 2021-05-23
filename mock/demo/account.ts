import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const userInfo = {
  name: 'FuyunWang',
  userid: '00000001',
  email: 'test@gmail.com',
  signature: '海纳百川，有容乃大',
  introduction: '自信人生两百年，会当击水三千里',
  title: '深度学习专家',
  group: '山东师范大学——智能信息处理实验组——深度学习机器视觉',
  tags: [
    {
      key: '0',
      label: '很有想法的',
    },
    {
      key: '1',
      label: '专注设计',
    },
    {
      key: '2',
      label: '机器视觉~',
    },
    {
      key: '3',
      label: '人工智能',
    },
    {
      key: '4',
      label: '微服务',
    },
    {
      key: '5',
      label: '海纳百川',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  address: 'Xiamen City 77',
  phone: '0592-268888888',
};

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
] as MockMethod[];
