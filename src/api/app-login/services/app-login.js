'use strict';

/**
 * app-login service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-login.app-login');
