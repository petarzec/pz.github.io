
$(function slider()
{
$('.slider').on('input change', function(){
          $(this).next($('.slider_label')).html(this.value);
        });
      $('.slider_label').each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });  
  
  
})

function calc() {
  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);
  var n3 = parseFloat(document.getElementById('n3').value);
  var n4 = parseFloat(document.getElementById('n4').value);


  var n4a = n4 / 100;
	var r3 = document.getElementById('result3').value = n1 / n3;
  var r5 = document.getElementById('result5').value = (r3 * n4a)
  var r1 = document.getElementById('result1').value = n1 - ((n2) + (n3 * r5));
  var r2 = document.getElementById('result2').value = (r1 / n1) * 100;
  var r4 = document.getElementById('result4').value = r1 / n3;
  var r6 = document.getElementById('result6').value = n2 / n3;
}

