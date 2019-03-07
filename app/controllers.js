(function () {
  'use strict';

  mtmDemo.component('topNavigation', {
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
      vm.tempUrl = svc.getTemplateUrl('navigation.html');

    }

  });

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
        var filter = '?$filter=Disable eq false';
        svc.getItems("AccordionList", filter).then(function (results) {
          vm.items = results;          
          console.log(vm.items);
        });
      };
      vm.getClass = function(index){
       return index==0?'in':'';
      }      

      vm.tempUrl = svc.getTemplateUrl('accordion.html');
    }
  });

  mtmDemo.component('slider', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.$onInit = function () {
        var filter = '';
        svc.getItems("Slider", filter).then(function (results) {
          vm.items = results;          
          console.log(vm.items);
        });
      };
      vm.getClass = function(index){
       return index==0?'active':'';
      }      

      vm.tempUrl = svc.getTemplateUrl('slider.html');
    }
  });



})();

