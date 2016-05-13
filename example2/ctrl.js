app.controller("SomeController", function($scope){
    $scope.title = "Titre";
    $scope.text = "Contenu";
});

app.directive("expander", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        template: '<div>' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs){
            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            };
        }
    };
});


app.controller("secondCtrl", function($scope){
	$scope.personne={
		nom:'toto',
		ville:'paris'
	};
});

app.directive("message" ,function(){
	
	return {
		restrict : 'EA',
		template : 'nom :{{personne.nom}} ville : {{personne.ville}}'
	};
});

app.directive('myDraggable', ['$document', function($document) {
  return {
	priority:0,
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);

app.directive('myDimensionnable', ['$document', function($document) {
  return {
	priority:5,
	link: function(scope, element, attr) {
      var  posix= 0 , posiy= 0, startX = 0, startY = 0, x = 0, y = 0;
		
		element.css({
		  backgroundColor: 'red',
		  resize:'both',
		  overflow:'auto'
		});
		
    }	
  };
}]);
