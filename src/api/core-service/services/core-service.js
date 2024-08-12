'use strict';

/**
 * core-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::core-service.core-service');
