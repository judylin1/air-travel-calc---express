module.exports = {
  airfare: function(depcity, arrcity, bags, seat, wifi, discode) {
    var airprice = "";
    if (depcity === "Chicago") {
      if (arrcity === "New York") {
        airprice = 250;
      }
      else if (arrcity === "Los Angeles") {
        airprice = 350;
      }
      else {
        airprice = 0;
      }
    }

    else if (depcity === "Los Angeles") {
      if (arrcity === "New York") {
        airprice = 545;
      }
      else if (arrcity === "Chicago") {
        airprice = 350;
      }
      else {
        airprice = 0;
      }
    }

    else if (depcity === "New York") {
      if (arrcity === "Chicago") {
        airprice = 250;
      }
      else if (arrcity === "Los Angeles") {
        airprice = 545;
      }
      else {
        airprice = 0;
      }
    }

    var checkedbags = "";
    if (bags > 0) {
      checkedbags = bags * 25;
    }
    else {
      checkedbags = 0;
    }

    var classprice = "";
    if (seat === "business") {
      classprice = 200;
    }
    else if (seat === "first") {
      classprice = 500;
    }
    else {
      classprice = 0;
    }

    var wifiprice = "";
    if (wifi) {
      wifiprice = 12;
    }
    else {
      wifiprice = 0;
    }

    var discount = "";
    if (discode === "10OFF") {
      discount = 0.9;
    }
    else if (discode === "20OFF") {
      discount = 0.8;
    }
    else {
      discount = 1;
    }

    if (airprice > 0) {
      var totalCost = (airprice * discount) + checkedbags + classprice + wifiprice;
    }
    else {
      var totalCost = 0;
    }
    return totalCost;
  }
}
