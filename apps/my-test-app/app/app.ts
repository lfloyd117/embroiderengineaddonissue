import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'my-test-app/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  engines = {
    'my-engine': {
      dependencies: {
        services: ['router', 'store'],
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);
