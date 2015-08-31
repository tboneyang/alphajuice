function ship(){
  var nsale = Number($("#livesale").text());
  var nship = Number($("#liveship").text());
  var rand = Math.floor((Math.random() * 5) + 1);
  //check if shipment is less than sales
  if( nsale >= (nship+rand) ){

    nship = nship + rand;

    $("#liveship").hide();
    $("#liveship").text(nship);
    $("#liveship").fadeIn();
  }
}
setInterval(ship, 6000);
