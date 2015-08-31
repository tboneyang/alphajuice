



  $(document).ready(function() {
    var pusher = new Pusher('1317412019e7e47cfed7');
    var channel = pusher.subscribe('update-sales-channel');

    channel.bind('update-sale', function(data) {
      //update sales#
      var newn = Number($("#livesale").text())+1;
      $("#livesale").text(newn);


      //create new feed block
      var tbox = document.createElement("div");
      tbox.className = "tweetbox";
      var rbox = document.createElement("div");
      rbox.className = "row";
      tbox.appendChild(rbox);

      //create params in it
      //first name
      var col5 = document.createElement("div");
      col5.className = "col-md-3";
      var sname = document.createElement("span");
      sname.className= "tname";
      sname.innerHTML = data.name;
      col5.appendChild(sname);
      rbox.appendChild(col5);
      //quantity
      var col2 = document.createElement("div");
      col2.className = "col-md-3";
      var squantity = document.createElement("span");
      squantity.className= "itquantity";
      var ig = document.createElement("i");
      ig.className = "glyphicon";
      ig.className += " " + "glyphicon-glass";
      squantity.innerHTML = data.quantity;
      squantity.appendChild(ig);
      col2.appendChild(squantity);
      rbox.appendChild(col2);

      //city
      var col4 = document.createElement("div");
      col4.className = "col-md-3";
      var scity = document.createElement("span");
      scity.className= "tcity";
      var mapm = document.createElement("i");
      mapm.className = "glyphicon";
      mapm.className += " " + "glyphicon-map-marker";
      scity.innerHTML = data.city + " ";
      scity.appendChild(mapm);
      col4.appendChild(scity);
      rbox.appendChild(col4);
      //country
      var col3 = document.createElement("div");
      col3.className = "col-md-3";
      var scountry = document.createElement("span");
      scountry.className= "tcountry";
      scountry.innerHTML = data.country;
      col3.appendChild(scountry);
      rbox.appendChild(col3);
      //quantity



      $("#feedtable").prepend(tbox);


      /*
      //update feed
      //first build new block





      //fill in the data

      //final step add box to the feed
      $("#feedtable").prepend(scountry);
      */

    });
  });
//$(document).ready(ready);
//$(document).on('page:load', ready);



/*
var pusher2 = new Pusher('1317412019e7e47cfed7');
var channel2 = pusher2.subscribe('update-feed-channel');
channel.bind('update-feed', function(data) {
  $("#feedtable").text(data.total);

});
*/
