//select color input
//select size input
var height, width, color;

//when sizes is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
event.preventDefault();
height = $('#inputHeight').val();
width = $('#inputWeight').val();
makeGrid(height, width);
})

function makeGrid(x, y) {

//your code goes here
$('tr').remove();
$('table').append('<tbody></tbody>');
  for(var i = 1; i<= x; i++){
    $('tbody:last').append('<tr></tr>');
      for(var j = 1; j<= y; j++){
        $('tr:last').append('<td></td>');
  }
}

//jQuery action to change color when clicked by user
$('td').click(function addColor(){

color = $('#colorPicker').val();

if($(this).attr('style')){
    $ (this).removeAttr('style')
} else {
      $(this).attr('style','background-color:' + color);
}

})
}
