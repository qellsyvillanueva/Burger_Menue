var spicy ={
  name: "The Spicy Burger",
  meat: "Angus Beef",
  veg: "Lettuce, Tomato, Onion",
  sauce: "Sriracha Mayo",
  price: 14.74
};

var mild ={
  name: "The Mild Burger",
  meat: "Turkey",
  veg: "Lettuce, Tomato, Onion",
  sauce: "Mustard Mayo",
  price: 12.89
};

function variables() {
  document.getElementById('1a').innerHTML = spicy.name;
  document.getElementById('1b').innerHTML = spicy.meat;
  document.getElementById('1c').innerHTML = spicy.veg;
  document.getElementById('1d').innerHTML = spicy.sauce;
  document.getElementById('1e').innerHTML = spicy.price;
  document.getElementById('2a').innerHTML = mild.name;
  document.getElementById('2b').innerHTML = mild.meat;
  document.getElementById('2c').innerHTML = mild.veg;
  document.getElementById('2d').innerHTML = mild.sauce;
  document.getElementById('2e').innerHTML = mild.price;
}

 var tax = 1.04712;

function spicyBurger(){
 
  var total= spicy.price * tax;
  document.getElementById('total').innerHTML = "Your total is $" + total.toFixed(2);
}

function mildBurger(){

  var total = mild.price * tax;
  document.getElementById('final').innerHTML = "Your total is $" + total.toFixed(2);
}
