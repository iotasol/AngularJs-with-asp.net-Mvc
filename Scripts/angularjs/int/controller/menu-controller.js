'use strict';
angular.module('menu-controller')
/**
 * Menu Controller
 */
.controller('ManageMenuCtrl',
 function ($scope, $location, $window, $rootScope, $filter, MenuService, DeleteMenuService) {
     //Method to get list of menu
     var getMenuList = function () {
         //call service to get all list of menu
         MenuService.get(function (obj) {
             $scope.menuList = obj;
         });
     };

     //Call Method to get list of menu
     getMenuList();

     //Method to save Menu form
     $scope.saveMenu = function (obj) {
         //console.log($scope.menu);
         $scope.onClickValidate = !obj;
         if (!obj) {//condition to check form is valid or not
             return;
         }

         MenuService.save($scope.menu, function (obj) {
            //show menu save success message
            $("#managemenu .success-text").fadeIn();
            setTimeout(function () {
                //hide menu save success message after 8 sec
                $("#managemenu .success-text").fadeOut();
            }, 8000)

            bootbox.alert("Menu has been saved successfully !", function () {
            });

            //calling Method to clear and initialize the Menu form
            $scope.clearMenu();

            //Call Method to get list of menu
            getMenuList();
        });
     };

     //Method to update Menu form
     $scope.updateMenu = function (obj,menuObj) {
         $scope.onClickValidate = !obj;
         if (!obj) {//condition to check form is valid or not
             return;
         }

         //service call to update menu form
         MenuService.save($scope.menu, function (obj) {
             //show menu update success message
             $("#managemenu .success-text2").fadeIn();
             setTimeout(function () {
                 //hide menu update success message after 8 sec
                 $("#managemenu .success-text2").fadeOut();
             }, 8000)

             bootbox.alert("Menu has been updated successfully !", function () {
             });

             //calling Method to clear and initialize the Menu form
             $scope.clearMenu();

             //Call Method to get list of menu
             getMenuList();
         });

     };
     //Method to clear and initialize the Menu form
     $scope.clearMenu = function () {
         //Defaull initialization of objects
         $scope.menu = {};
         $scope.menu.orderValue = 0;
         $scope.menu.active = true;
         $scope.onClickValidate = false;
         $scope.menuUpdate = false;
     };

     //call to clear and initialize menu form
     $scope.clearMenu();

     //Method to delete the menu
     $scope.deleteMenu = function (menuObj) {
         bootbox.confirm("Are you sure?", function (result) {
             if (result) {
                 //Service to delete the selected menu
                 DeleteMenuService.remove({ id: menuObj.id }, function () {
                     getMenuList();
                 });
             }
         });
     };

     //Method to get seleted menu data for edit
     $scope.showMenuForEdit = function (objMenu) {
         $scope.tempMenu = angular.copy(objMenu);
         $scope.menu = $scope.tempMenu;
         $scope.isAddForm = true;
         $scope.menuUpdate = true;
     };
 }
);