export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: '烟雾检测',
      description: '基于Pytorch、Spring Cloud、GRPC、Vue Next, TypeScript, Ant Design实现的工业级智能检测机器视觉平台',
      datetime: '2021-05-23 17:39',
      extra: '编辑',
      icon: 'logos:vue',
      color: '#1890ff',
      author: 'FuyunWang',
      percent: 20 * (i + 1),
    });
  }
  return result;
})();
