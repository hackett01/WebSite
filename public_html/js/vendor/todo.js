/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




angular.module('todoApp', [])
        .controller('TodoListController', function () {
            var todoList = this;
            todoList.todos = [
                {text: 'hola', done: true},
                {text: 'como estas', done: false}];

            todoList.addTodo = function () {
                todoList.todos.push({text: todoList.todoText, done: false});
                todoList.todoText = '';
            };
        });

