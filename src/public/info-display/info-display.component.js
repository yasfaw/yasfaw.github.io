(function () {
"use strict";

angular.module('public')
.component('displayInfo', {
  templateUrl: 'src/public/info-display/info-display.html',
  bindings: {
    customer: '<',
    item: '<'
  },
  controller: InfoController
});


InfoController.$inject = ['ApiPath'];
function InfoController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
