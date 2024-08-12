'use strict';

/**
 * help-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::help-action.help-action');
