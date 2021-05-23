import { FormSchema } from '/@/components/Form/index';

export const searchList = (() => {
  const result: any[] = [];
  const datas = [
    '人脸检测',
    '人脸对比',
    '未穿安全帽检测',
    '未穿工作服检测',
    '打电话检测',
    '吸烟检测',
    '烟火检测',
    '鼠患检测',
    '未带厨师帽检测',
    '未带口罩检测',
    '烟雾检测'
  ];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: datas[i],
      description: ['Pytorch', 'Micro Service', 'Vue'],
      content: ' 基于Pytorch、Spring Cloud、GRPC、Vue Next, TypeScript, Ant Design实现的工业级智能检测机器视觉平台',
      time: '2021-05-14 11:20',
    });
  }
  return result;
})();

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'InputSearch',
    label: '项目名',
    colProps: {
      span: 8,
    },
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
  },
];
