/*exported $timerBtn*/
var $timerBtn=(function(){
  //  var $btnAgree = $('input[type="button"]');
  cfg={
    container:'.main', //容器
    titil:'确定',
    time:4,
    enabled:false,
    clickHandle:function(){
      alert('lalala')
    }
  
  };//配置

  var n= cfg.time;
  var init = function(conf){
     $.extend(cfg,conf);
     var $container = $(cfg.container);
     //tempalte string;
    
     var DOM = '<input class="timer-button" type="button" value="" +cfg.title+'('+n+'s' disabled>';
     $container.html(DOM);

     $btnAgree.attr('disabled',true);
      var timer = window.setInterval(function(){
       n--;
       if(n===0){
          window.clearInterval(timer);
          $btnAgree.removeAttr('disabled');
          $btnAgree.val('同意');
       }else{ 
          $btnAgree.val('同意('+n+'s)');
       }
     },1000);
 
      $btnAgree.click(function(){
        alert('ok');
      })
   });
  }
  return {init:init};

)());//立即执行表达式


