/*global echars: true*/
$(function(){
//create x y
  var xData = [],
      yData = [];
 
  for(var p=0;p<=1;p+=0.1){
    xData.push(p);
    yData.push(h(p));
   // console.log(`p=${p},h(p)=${h(p})};
  }
  function h(p){
    if(p=0){
    return 0;
  }
    return -1 * p *Math.log2(p) - (1-p) *Math.log2(1-p);
  }
  var myChart = echars.init($('.main')[0]);

  // 指定图表的配置项和数据
  var option = {
  title: {
           text: '二进熵函数'
            },
            tooltip: {},
            legend: {
                data:['二进熵']
            },
            xAxis:{
              data:xData
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',//bar
                data: yData,
                smooth:true
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
});
