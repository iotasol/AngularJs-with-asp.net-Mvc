'use strict';

angular.module('menu-service')
//Service to save/update/gel/delete menu
.factory('MenuService', function ($resource) {
    return $resource("menu/MenuService/:id", { id: '@id' }, {
        save: { method: 'POST', params: {}, isArray: false },
        get: { method: 'GET', params: {}, isArray: true },
        remove: { method: 'POST', params: {}, isArray: false }
    });
})
.factory('DeleteMenuService', function ($resource) {
    return $resource("menu/DeleteMenuService/:id", { id: '@id' }, {
        remove: { method: 'POST', params: {}, isArray: false }
    });
});