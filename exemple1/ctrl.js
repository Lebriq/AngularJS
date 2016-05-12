app.controller('firstCtrl',function($scope){
	$scope.sexes=['Homme','Femme'];
	$scope.s="inconnu";
	var sex=$scope.sex;
	
	
	$scope.setSelectedSex = function(){
		
		if($scope.sex=="Homme"){
			$scope.message ="hello man";
		}else if($scope.sex=="Femme"){
			$scope.message ="hello woman";
		}
		return "true"
	};
});

app.filter('getSex', function() {
		return function(sex){
			return "done";
		};
});
	