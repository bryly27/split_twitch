split.controller('splitController', function($scope, $sce, $cookies, $window){


	console.log('controller loaded');

	if($cookies.get('screenOne')){
		$scope.trustOneVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenOne');
		$scope.splitOneVid = $sce.trustAsResourceUrl($scope.trustOneVid);
	}
	if($cookies.get('screenTwo')){
		$scope.trustTwoVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenTwo');
		$scope.splitTwoVid = $sce.trustAsResourceUrl($scope.trustTwoVid);
	}
	if($cookies.get('screenThree')){
		$scope.trustThreeVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenThree');
		$scope.splitThreeVid = $sce.trustAsResourceUrl($scope.trustThreeVid);
	}
	if($cookies.get('screenFour')){
		$scope.trustFourVid = "http://player.twitch.tv/?channel=" + $cookies.get('screenFour');
		$scope.splitFourVid = $sce.trustAsResourceUrl($scope.trustFourVid);
	}


	$scope.submitOne = function(data){
		$cookies.put('screenOne', data);
		$scope.trustOneVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitOneVid = $sce.trustAsResourceUrl($scope.trustOneVid);
	}

	$scope.submitTwo = function(data){
		$cookies.put('screenTwo', data);
		$scope.trustTwoVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitTwoVid = $sce.trustAsResourceUrl($scope.trustTwoVid);
	}

	$scope.submitThree= function(data){
		$cookies.put('screenThree', data);
		$scope.trustThreeVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitThreeVid = $sce.trustAsResourceUrl($scope.trustThreeVid);
	}

	$scope.submitFour= function(data){
		$cookies.put('screenFour', data);
		$scope.trustFourVid = "http://player.twitch.tv/?channel=" + data;
		$scope.splitFourVid = $sce.trustAsResourceUrl($scope.trustFourVid);
	}

	$('#clearAll').click(function(){
		console.log('here');
		$cookies.remove('screenOne');
		$cookies.remove('screenTwo');
		$cookies.remove('screenThree');
		$cookies.remove('screenFour');	
		location.reload();
	})

	$('form').hide();

	$('.channel').mouseenter(function(){
		console.log('here');
		$(this).find('form').fadeIn();
	}).mouseleave(function(){
		$(this).find('form').fadeOut();
	})
	

	var timeoutid = 0;
	$('body').mousemove(function() {
			$('nav').fadeIn();
	    clearTimeout(timeoutid);
	    timeoutid = setTimeout(hideMenu, 2000);
	});

	function hideMenu(){
		$('nav').fadeOut();
	}











});