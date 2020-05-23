// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

var echarts = require('echarts');

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const barChartData = {
  option:
    {
      grid: {
        top: '6%',
        left: '1%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
      trigger: 'none',
      axisPointer: {
          type: 'cross'
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        axisLine: {
          show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#eee'
            }
        },
      }
    ],
    yAxis: [
      {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
              show: false
          },
          splitLine: {
            lineStyle: {
                  type: 'dashed',
                  color: '#eee'
              }
          },
      }
    ],
    series: [
        {
            name: 'Data',
            type: 'line',
            stack: 'Data1',
            lineStyle: {
              width: 2,
              shadowColor: 'rgba(244, 67, 54 ,1)',
              shadowBlur: 8,
              shadowOffsetY: 0
            },
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            smooth: true,
            itemStyle: {
              color: 'rgb(244, 67, 54)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(244, 67, 54)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0)'
                }])
            },
            data: [820, 1200, 834, 1450, 1600]
        }
    ]
  }
}

/* PIE CHART DATA */


let chartData1 = [
  {value:12, onSale: 9, capability: 1500, purchases: 156000, proceeds: 400000, stock: 1, oldPrice: 0, inSystem: 1, inProgram: 1},
  {value:9, onSale: 7, capability: 1100, purchases: 156000, proceeds: 400300, stock: 1, oldPrice: 1, inSystem: 1, inProgram: 1},
  {value:7, onSale: 7, capability: 1500, purchases: 156000, proceeds: 100000, stock: 0, oldPrice: 0, inSystem: 1, inProgram: 1},
  {value:6, onSale: 4, capability: 1500, purchases: 156000, proceeds: 400000, stock: 0, oldPrice: 5, inSystem: 1, inProgram: 1},
  {value:5, onSale: 4, capability: 1500, purchases: 156000, proceeds: 400000, stock: 0, oldPrice: 5, inSystem: 1, inProgram: 1},
];
let chartData2 = [
  {value:4, onSale: 3, capability: 1500, purchases: 0, proceeds: 800000, stock: 1, oldPrice: 0, inSystem: 1, inProgram: 1, selected: true},
  {value:2, onSale: 1, capability: 1200, purchases: 0, proceeds: 100000, stock: 1, oldPrice: 1, inSystem: 1, inProgram: 1, selected: true},
  {value:2, onSale: 2, capability: 1100, purchases: 0, proceeds: 5000, stock: 1, oldPrice: 0, inSystem: 1, inProgram: 1, selected: true},
];
let gapSize = 5; //percentage
let chartColors = [
  "#a4d46d", 
  "#e1e872", 
  "#ffe16e", 
  "#ffc247", 
  "#f99090", 
  "#ff5858"
];
// render colors
Array.prototype.colors = function (arr) {
  for ( var i = 0; i < arr.length; i++ ) {
      arr[i]['itemStyle'] = {
        color: chartColors[i]
      }
  }
  return arr
}
chartColors.colors(chartData1);
chartColors.colors(chartData2);

let gapParam = {
  value: "0", 
  tooltip : {
      show: false
  },
  label:{
      formatter: "",
      position : 'inner',
  },
  itemStyle: {
      color: 'rgba(0,0,0,0)',
      opacity: 0,
      borderWidth: 0,
  }
}

chartData1.push(gapParam);
chartData2.push(gapParam);

let chartData = chartData1.concat(chartData2);

const pieChartData = {
    option: {
      calculable : false,
      
      series : [
          {
              name:'Source',
              type:'pie',
              minAngle: gapSize,
              clockwise: true,
              radius : ['30%', '90%'],
              label: {
                  normal: {
                      color: "#000",
                      formatter: "{a| {@value} } \n {b| {d}% }",
                      rich: {
                          a: {
                              color: "#000",
                              fontSize: 14,
                              align: 'center'
                          },
                          b: {
                              color: "#2d2d2d",
                              fontSize: 8,
                              align: 'center',
                          }
                      },
                      position : 'inner',
                  }
              }
          }
      ],
      dataset: {
          source: chartData
      }
  }
}




module.exports = {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  barChartData,
  pieChartData
};
