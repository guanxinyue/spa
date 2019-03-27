$(function(){
  var $range = $('input[type="range"]');
  var $txtAge = $('#age');

  $range.change(function(){
    console.log($range.val());
    $txtAge.html($range.val());
  });
});
