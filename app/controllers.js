(function () {
  'use strict';

  mtmDemo.component('carosel', {
    controllerAs: 'vm',
    controller: function (svc) {
      var vm = this;
      vm.$onInit = function () {
        // TODO: Initialization goes here
      };
      vm.tempUrl = svc.getTemplateUrl('carosel.html');
      vm.title1 = "This is Title 1";
    },
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    }

  });


  mtmDemo.component('customfooter', {
    controllerAs: 'vm',
    controller: function (svc) {
      var vm = this;
      vm.tempUrl = svc.getTemplateUrl('footer.html');
    },
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    }

  });



})();

