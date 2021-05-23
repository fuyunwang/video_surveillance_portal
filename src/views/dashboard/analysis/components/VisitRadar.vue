<template>
  <Card title="监控场景" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref, watch } from 'vue';

  import { Card } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  export default defineComponent({
    components: { Card },
    props: {
      loading: Boolean,
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px',
      },
    },
    setup(props) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      watch(
        () => props.loading,
        () => {
          if (props.loading) {
            return;
          }
          setOptions({
            legend: {
              bottom: 0,
              data: ['检测', '告警'],
            },
            tooltip: {},
            radar: {
              radius: '60%',
              splitNumber: 8,
              indicator: [
                {
                  text: '工厂',
                  max: 100,
                },
                {
                  text: '教室',
                  max: 100,
                },
                {
                  text: '医院',
                  max: 100,
                },
                {
                  text: '公共场合',
                  max: 100,
                },
                {
                  text: '实验室',
                  max: 100,
                },
                {
                  text: '会议室',
                  max: 100,
                },
              ],
            },
            series: [
              {
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                  shadowBlur: 0,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1,
                },
                data: [
                  {
                    value: [90, 50, 86, 40, 50, 20],
                    name: '检测',
                    itemStyle: {
                      color: '#b6a2de',
                    },
                  },
                  {
                    value: [70, 75, 70, 76, 20, 85],
                    name: '告警',
                    itemStyle: {
                      color: '#5ab1ef',
                    },
                  },
                ],
              },
            ],
          });
        },
        { immediate: true }
      );
      return { chartRef };
    },
  });
</script>
