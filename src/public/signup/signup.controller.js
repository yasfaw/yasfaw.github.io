(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','$localStorage'];
function SignUpController(MenuService,$localStorage) {
  var $ctrl = this;
  $ctrl.notFound  = -1;
  $ctrl.saved = -1
  if(!$localStorage.Info) {
  $localStorage.Info = -1;// no information added
}
$ctrl.validate = $ctrl.submit =function(short_name){
  var itemPromise = MenuService.getMenuItem(short_name)
  itemPromise.then(function(result){
    $localStorage.item =result.data;
      $ctrl.notFound  = 0;
  },
function(errorResponse){
  $ctrl.notFound  = 1;
  $localStorage.item = null;

})
}
$ctrl.submit =function(customer){
    $localStorage.Info =customer;
    //var itemPromise = MenuService.getMenuItem(customer.menuNumber)
    //itemPromise.then(function(result){
    $ctrl.saved  = 1;
    //$localStorage.item =result.data;
    //},
  //function(errorResponse){
  //  $ctrl.notFound  = 1;
  //  $localStorage.item = null;

  //})
  }
  $ctrl.isActive =function(flag){
      $ctrl.saved  = flag;
    }

}


})();
