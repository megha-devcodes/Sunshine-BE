'use strict';

/**
 * core-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::core-service.core-service');
