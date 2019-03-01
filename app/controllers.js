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
      vm.title1 = "This is Title 1";
    }

  });


  mtmDemo.component('customfooter', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.tempUrl = svc.getTemplateUrl('footer.html');
    }
  });



})();

