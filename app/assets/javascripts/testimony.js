//change testimonys
var slogans = ["\"No one buys Viagra anymore. I'm bankrupt. Literally.\"","\"I got a girlfriend.\""]
var pics = ["/ceo.jpg","/dinesh.png"];
var bios = ["Ian Read, CEO, PZifer","Dinesh Chugtai, CTO, Pied Piper"];
var count = 0;

function swap(){

  //first hide
  if(count==0){
    count++;
  }
  else{
    count--;
  }
  $(".testimonybox").hide();
  $("#testimonyslogan").text(slogans[count]);
  $("#testimonypic").attr("src",pics[count]);
  $("#testimonybio").text(bios[count]);
  $(".testimonybox").fadeIn();
}
setInterval(swap, 6000);
