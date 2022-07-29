'use strict';

/**
 * app-todo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-todo.app-todo');
