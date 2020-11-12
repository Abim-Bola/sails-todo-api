//jshint esversion:6
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */


module.exports.routes = {

  //task routes
    'GET /api/v1/todo/get': { action: 'todo/get'}, 
    'POST /api/v1/todo/create': { action: 'todo/create'},
    'PATCH /api/v1/todo/update': { action: 'todo/update'},
    'DELETE /api/v1/todo/delete': { action: 'todo/delete' },


    //user routes
    'POST /api/v1/user/login': { action: 'user/login' },
    'POST /api/v1/user/signup': { action: 'user/signup' },
};
