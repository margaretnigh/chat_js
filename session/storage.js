// Simple visit counter for the main page
const counter = get('/', ctx => {
  ctx.session.views = (ctx.session.views || 0) + 1;
  return { views: ctx.session.views };
});

/* test */
await run(counter).alive(async api => {
  let res = await api.get('/');
  expect(res.body.views).toBe(1);
  res = await api.get('/');
  expect(res.body.views).toBe(2);
  res = await api.get('/');
  expect(res.body.views).toBe(3);
});

const server = require('server');
// Your own file for the config:
const storage = require('./session-storage.js');
server({ session: { storage } }, [
  // Routes here
]);

