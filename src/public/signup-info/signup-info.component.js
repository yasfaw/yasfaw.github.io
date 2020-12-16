(function () {
"use strict";

angular.module('public')
.component('signupInfo', {
  templateUrl: 'src/public/signup-info/signup-info.html',
  bindings: {
    found: '<',
    saved: '<',
    submit : '&',
    validate: '&',
    isactive: '&'
  },
});
})();
