import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

const modulePrefix = 'my-engine';
const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  // Defines the route and service dependencies that the engine requires from the host app.
  dependencies: Object.freeze({
    services: ['router'],
  }),
});

loadInitializers(Eng, modulePrefix);

export default Eng;
