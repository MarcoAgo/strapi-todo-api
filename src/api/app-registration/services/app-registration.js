'use strict';

/**
 * app-registration service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-registration.app-registration');
