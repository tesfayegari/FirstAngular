(function () {
  'use strict';

  mtmDemo.component('carosel', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.$onInit = function () {
        // TODO: Initialization goes here
      };      
      vm.tempUrl = svc.getTemplateUrl('carosel.html');
      
    }

  });


  mtmDemo.component('accordion', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;     
      vm.tempUrl = svc.getTemplateUrl('accordion.html');
    }
  });



})();

