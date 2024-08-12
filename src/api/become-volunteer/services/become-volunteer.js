'use strict';

/**
 * become-volunteer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::become-volunteer.become-volunteer');
