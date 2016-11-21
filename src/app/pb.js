import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { pbComponent } from './pb.component.js';


export const AppModule=	angular
	.module('pb',[])	
	.controller('MainCtrl', function MainCtrl() {
	  this.hero = {
	    name: 'como decis'
	  };
	});
	AppModule.component('pb',pbComponent);

angular.element(document).ready(function () {
	angular
	.bootstrap(document,['pb']);
	
});


