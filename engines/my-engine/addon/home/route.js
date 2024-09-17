import EmberRoute from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeIndex extends EmberRoute {
  @service store;

  model() {
    return 'astring';
  }
}
