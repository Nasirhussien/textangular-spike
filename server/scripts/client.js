var myApp = angular.module('myApp', ['textAngular']);

myApp.controller('WelcomeController', function(){
    console.log('controller working')
    var self = this;
    self.message = 'Hello!';
  });