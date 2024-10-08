import EmberRouter from '@ember/routing/router';
import config from 'my-test-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Add route declarations here
  this.mount('my-engine', {
    path: '/my-engine',
    as: 'my-engine'
});
});
