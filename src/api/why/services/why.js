'use strict';

/**
 * why service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why.why');
