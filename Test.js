function showpage(page) {
  $("#datastructshow").css("display", "none");
  $("#page1").css("display", "none");
  $("#page2").css("display", "none");
  $("#page3").css("display", "none");

  $("#p1").css("border-top", "none");
  $("#p1").css("border-bottom", "none");
  $("#p2").css("border-top", "none");
  $("#p2").css("border-bottom", "none");
  $("#p3").css("border-top", "none");
  $("#p3").css("border-bottom", "none");

  if (page === 1) {
    $("#page1").css("display", "block");
    $("#p1").css("border-top", "thick double #111111");
    $("#p1").css("border-bottom", "thick double #111111");
  }
  else if (page === 2) {
    $("#page2").css("display", "block");
    $("#p2").css("border-top", "thick double #111111");
    $("#p2").css("border-bottom", "thick double #111111");
  }
  else if (page === 3) {
    $("#page3").css("display", "block");
    $("#p3").css("border-top", "thick double #111111");
    $("#p3").css("border-bottom", "thick double #111111");
  }
}

//ChangeColor page divs
function changeColor(color) {
  if (color === 1) {
    console.log("Black Font Color");
    $("p").css("color", "#000000");
  }
  else if (color === 2) {
    console.log("Blue Font Color");
    $("p").css("color", "blue");
  }

}
