(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','$localStorage'];
function MyInfoController(MenuService,$localStorage) {
  var $ctrl = this;
$ctrl.customer = $localStorage.Info;
$ctrl.item = $localStorage.item;
}


})();
