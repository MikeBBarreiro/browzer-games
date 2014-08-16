(function(){
  'use strict';

  $(document).ready(function(){
    alert('Painter is ready!');
    $('#controls > button').click(addBox);
    $('#colors').on('mouseenter', '.color', paintBackground);
    $('#canvas').on('mouseenter', '.pixal', paintPixal);
    makeCanvas();
  });

  function paintPixal(){
    var color = $('#selected').css('background-color');
    $(this).css('background-color', color);
  }

  function makeCanvas(){
    for(var i = 0; i < 10000; i++){
      var $pixal = $('<div>');
      $pixal.addClass('pixal');
      $('#canvas').append($pixal);
    }
  }

  function addBox(){
//color takes the input value which is .val and makes it the varable = color
    var color = $('#controls > input').val(),
//this makes a div called $boxC
        $boxC = $('<div>');
//this gives $boxC a class selector from style.css
    $boxC.addClass('color');
//this gives that div ($boxC) a background-color of color, which
//is whatever color was inputed
    $boxC.css('background-color', color);
    $('#colors').append($boxC);
  }

  function paintBackground(){
    var color = $(this).css('background-color');
    $('#selected').css('background-color',color);
    console.log(color);

    return color;
  }

})();

