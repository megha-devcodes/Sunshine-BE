'use strict';

/**
 * daily-update service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-update.daily-update');
