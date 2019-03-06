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
      vm.$onInit = function () {
        svc.getAccordion("AccordionList").then(function (results) {
          vm.items = results;
          vm.items.forEach(function (item) {
            item.Description = $(item.Description).html();
          });
          console.log(vm.items);
        });
      };
      // function htmlEntities(str) {
      //   return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      // }

      vm.tempUrl = svc.getTemplateUrl('accordion.html');
    }
  });



})();

