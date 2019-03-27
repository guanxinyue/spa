$(function(){
  
  var $btnAgree = $('input[type="button"]');
  var n = 6;
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
