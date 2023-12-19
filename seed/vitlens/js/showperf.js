var myChart = echarts.init(document.getElementById('perf'));
var option = {
    color: ['#FF917C', '#56A3F1'],
    title: {
      text: ''
    },
    legend: {
      data: ['Previous Methods', 'ViT-Lens'],
      show: true,
      y: "bottom",
      itemHeight: 18,
      textStyle:{
        fontSize: 16,
      }
    },
    radar: {
      // shape: 'circle',
      radius: 150,
      indicator: [
        { name: 'MN40 ZS', max: 96.36, min: 50.64 },
        { name: 'O-LVIS ZS', max: 57.2, min: 28.08 },
        { name: 'O-LVIS ZS \n (No LVIS train)', max: 55.11, min: 23.46 },
        { name: 'SONN ZS', max: 66.11, min: 31.32 },
        { name: 'SUN-D', max: 57.42, min: 21.06 },
        { name: 'NYU-D ZS', max: 75.35, min: 32.4 },
        { name: 'AudioSet CLS', max: 29.37, min: 10.56 },
        { name: 'ESC ZS', max: 83.49, min: 40.14 },
        { name: 'Clotho Ret ZS', max: 8.91, min: 3.6 },
        { name: 'VGGS ZS', max: 34.87, min: 16.68 },
        { name: 'TAG LP', max: 69.3, min: 32.82 },
        { name: 'IN-EEG', max: 46.97, min: 11.52 }
      ],
      axisName: {
        // for benchmark name
        color: '#000',
        borderRadius: 2,
        fontSize: 13,
        fontFamily: 'sans-serif',
        padding: [1, 2],
        show: true
      }
    },
    series: [
      {
        name: 'Prev vs ViT-Lens',
        type: 'radar',
        data: [
          {
            value: [
              84.4, 46.8, 39.1, 52.2, 35.1, 54.0, 17.6, 66.9, 6.0, 27.8, 54.7,
              19.2
            ],
            name: 'Previous Methods',
            symbol: 'circle',
            symbolSize: 11,
            lineStyle: {
              width: 3
            },
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(255, 145, 124, 0.1)',
                  offset: 0
                },
                {
                  color: 'rgba(255, 145, 124, 0.9)',
                  offset: 1
                }
              ])
            }
          },
          {
            value: [
              87.6, 52.0, 50.1, 60.1, 52.2, 68.5, 26.7, 75.9, 8.1, 31.7, 63.0,
              42.7
            ],
            name: 'ViT-Lens',
            symbol: 'rect',
            symbolSize: 11,
            lineStyle: {
              type: 'dashed',
              width: 3
            },
            label: {
              fontSize: 15,
              show: true,
              formatter: function (params) {
                return params.value;
              }
            }
          }
        ]
      }
    ]
  };  
myChart.setOption(option);
  