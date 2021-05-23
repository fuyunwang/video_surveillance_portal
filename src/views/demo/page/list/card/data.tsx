export const cardList = (() => {
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
  for (let i = 0; i < 11; i++) {
    result.push({
      title: datas[i],
      icon: 'logos:vue',
      color: '#1890ff',
      active: '100',
      download: 'bx:bx-download',
    });
  }
  return result;
})();
