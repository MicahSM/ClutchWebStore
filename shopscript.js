(function() {
    var app = angular.module('storeContent', []);
    
    app.directive("productTabs", function() {
        return {
          restrict: "E",
          templateUrl: "store-content.html",
          controller: function() {
            this.content = 1;

            this.isSet = function(checkTab) {
              return this.content === checkTab;
            };

            this.setcontent = function(activeTab) {
              this.content = activeTab;
            };
          },
          controllerAs: "content"
        };
      });


    };
    
})();