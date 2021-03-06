'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/url', controller.url.getURL);
  router.get('/test', controller.url.test);
};
