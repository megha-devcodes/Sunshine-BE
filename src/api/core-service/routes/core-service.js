'use strict';

/**
 * core-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::core-service.core-service');
