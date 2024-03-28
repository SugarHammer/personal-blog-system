// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));

// 指定图表的配置项和数据
option = {
    title: {
        text: 'CSDN用户性别比例',
        left: 'center',
        textStyle: {
            color: "white"
        }
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
            color: "white"
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 432, name: '男'},
                {value: 654, name: '女'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
option1 = {
    title: {
        text: 'CSDN博客热度较高的前7类',
        left: 'center',
        textStyle: {
            color: "white"
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "white"
            }
        },
        data: ['Java', 'Python', '人工智能', '物联网', '大前端', '区块链', '5G']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "white"
            }
        }
    },
    series: [{
        data: [8881, 9000, 6660, 5400, 7000, 6000, 2300],
        type: 'bar'
    }]
};
option2 = {
    title: {
        text: '近一个星期CSDN上博客发布的数量',
        left: 'center',
        textStyle: {
            color: "white"
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "white"
            }
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "white"
            }
        }
    },
    series: [{
        data: [300, 450, 360, 200, 310, 280, 420],
        type: 'line'
    }]
};
option3 = {
    title: {
        text: 'CSDN热度最火的五位博主',
        left: 'center',
        textStyle: {
            color: "white"
        }
    },
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 28350, '涛歌依旧'],
            [57.1, 27009, '一个处女座的程序猿'],
            [74.4, 25852, 'yuanmeng001'],
            [50.1, 24971, 'SAP剑客'],
            [89.7, 24249, 'Mdog250']
        ]
    },
    grid: {containLabel: true},
    xAxis: {
        name: '热度值',
        axisLine: {
            lineStyle: {
                color: "white"
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "white"
            }
        },
    },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);