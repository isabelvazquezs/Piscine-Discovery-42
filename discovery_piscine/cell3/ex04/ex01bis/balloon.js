$(document).ready(function () {
    const colors = ["red", "green", "blue"];
    let currentColor = 0;
    let currentSize = 200;
  
    function updateBalloon() {
      $("#balloon")
        .css({
          width: currentSize + "px",
          height: currentSize + "px",
          backgroundColor: colors[currentColor],
        });
    }
  
    $("#balloon").click(function () {
      currentSize += 10;
      currentColor = (currentColor + 1) % colors.length;
  
      if (currentSize > 420) {
        currentSize = 200;
        currentColor = 0;
      }
  
      updateBalloon();
    });
  
    $("#balloon").mouseleave(function () {
      if (currentSize > 200) currentSize -= 5;
  
      currentColor = (currentColor - 1 + colors.length) % colors.length;
  
      updateBalloon();
    });
  });
  