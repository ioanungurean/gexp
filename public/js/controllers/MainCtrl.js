angular
.module('app')
.controller('MainCtrl', ['$mdSidenav', '$mdToast', MainCtrl]);

function MainCtrl($mdSidenav, $mdToast) {

	var vm  = this;

	vm.toggleSidenav = function(menu) {
		$mdSidenav(menu).toggle();
	};

  vm.toggle = function(item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) list.splice(idx, 1);
		else list.push(item);
	};

	vm.toast = function(message) {
		var toast = $mdToast.simple().content('You clicked ' + message).position('bottom right').hideDelay(300);
		$mdToast.show(toast);
	};

	vm.changeTheme = function(theme) {
		vm.theme = theme;
		$mdToast.show(
			$mdToast.simple()
			.hideDelay(300)
			.content('Your theme is now ' + theme)
			.position('bottom right')
		);
		localStorage.setItem('theme', theme);
	}
};