import { createServer } from 'miragejs';
import ENV from 'my-test-app/config/environment';

export default function (config) {
  return createServer({
    ...config,
    logging: false,
    routes() {
      this.namespace = 'web/api';
      this.timing = ENV.environment === 'test' ? 0 : 400;
    },
  });
}
