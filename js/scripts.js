function Pizza(crustSize, meat, topping) {
  this.crustSize = crustSize;
  this.meat = meat;
  this.topping = topping;
  this.cost = 0;
}

Pizza.prototype.totalCost = function() {
  this.cost = this.crustSize += this.meat += this.topping;
  return this.cost;
}


$(document).ready(function() {

  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza(crustSize, meat, topping);

    var crustSize = parseInt($("#crust-size").val());
    var meat = parseInt($("#meat").val());
    var topping = parseInt($("#topping").val());
    var cost = newPizza.totalCost();

    $("#price").text(cost);

  });
});
