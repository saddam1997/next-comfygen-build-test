import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT || '3050', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})



// import { createServer } from 'http';
// import { parse } from 'url';
// import next from 'next';
// import compression from 'compression';
// import type { IncomingMessage, ServerResponse } from 'http';

// const port = parseInt(process.env.PORT || '3050', 10);
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// // Create a reusable compression middleware
// const compress = compression();

// app.prepare().then(() => {
//   createServer((req: IncomingMessage, res: ServerResponse) => {
//     // Apply compression to the response
//     compress(req as any, res as any, () => {
//       const parsedUrl = parse(req.url!, true);
//       handle(req, res, parsedUrl);
//     });
//   }).listen(port, () => {
//     console.log(
//       `> Server listening at http://localhost:${port} as ${
//         dev ? 'development' : process.env.NODE_ENV
//       }`
//     );
//   });
// });

