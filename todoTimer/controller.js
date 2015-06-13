angular.module('todoApp', [])

.controller('todoController', function($scope, TodoFactory){
  $scope.todos = [];
  $scope.newTodoTime = '';
  $scope.newTodoName = '';

  $scope.addTodo = function(name, time) {
    $scope.todos.push(TodoFactory.makeNewTodo(name, time));
  };

})
