"use strict";
// import { createServer } from 'http'
// import { parse } from 'url'
// import next from 'next'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const port = parseInt(process.env.PORT || '3050', 10)
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url!, true)
//     handle(req, res, parsedUrl)
//   }).listen(port)
//   console.log(
//     `> Server listening at http://localhost:${port} as ${
//       dev ? 'development' : process.env.NODE_ENV
//     }`
//   )
// })
const http_1 = require("http");
const url_1 = require("url");
const next_1 = __importDefault(require("next"));
const compression_1 = __importDefault(require("compression"));
const port = parseInt(process.env.PORT || '3050', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
// Create a reusable compression middleware
const compress = (0, compression_1.default)();
app.prepare().then(() => {
    (0, http_1.createServer)((req, res) => {
        // Apply compression to the response
        compress(req, res, () => {
            const parsedUrl = (0, url_1.parse)(req.url, true);
            handle(req, res, parsedUrl);
        });
    }).listen(port, () => {
        console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
    });
});
