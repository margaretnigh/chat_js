const server = require('server');

// Mount it on express' session
const MongoStore = require('connect-mongo')(server.session);
const store = MongoStore(options);

server(
  { session: { store } }
  ...
);
