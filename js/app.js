(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Azurite',
    price: 110.50,
    description:"Here goes some description.",
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: "Another gem.",
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'Hexagonal Gem',
    price: 10.95,
    description: "Another super awesome gem.",
    canPurchase: true,
    soldOut: false
  }
  ];
})();
