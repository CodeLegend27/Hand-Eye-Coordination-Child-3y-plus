"use strict";

// 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert("Please Play on Desktop PC");
} // IMG ARRAY


var images = ['dino8.png', 'dino1.png', 'dino2.png', 'dino3.png', 'dino4.png', 'dino5.png', 'dino6.png', 'dino7.png'];
$(document).ready(function () {
  // POPULATE SITE WITH IMAGES -- Randomly, Random size
  $('.square').each(function () {
    var randNumb = Math.floor(Math.random() * 71) + 30;
    var rand = Math.floor(Math.random() * images.length);
    $(this).append('<img class="dino" src="img/' + images[rand] + '"/ width="' + randNumb + '%" height="' + randNumb + '%">');
  }); // COUNT TILL GAME FINISH, Show Egg and smiley, RELOAD PAGE

  var x = 0;
  $('.dino').hover(function () {
    $(this).remove();
    x++;

    if (x == 50) {
      $("#egg").css("display", "block");
      $("p").css("display", "block");
      setTimeout(location.reload.bind(location), 8000);
    }

    console.log(x);
  });
});