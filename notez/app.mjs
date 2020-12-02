// import * as favicon from'serve-favicon';
import * as http from 'http';
import * as path from 'path';
import { approotdir } from './approotdir.mjs';
import { default as bodyParser } from 'body-parser';
import { default as cookieParser } from 'cookie-parser';
import { default as express } from 'express';
import { default as hbs } from 'hbs';
import { default as logger } from 'morgan';
import { default as rfs } from 'rotating-file-stream';
import {
  normalizePort, onError, onListening, handle404, basicErrorHandler
} from './appsupport.mjs';
import dotenv from 'dotenv/config.js';
import { default as DBG } from 'debug';
const debug = DBG('notez:debug');
const dbgerror = DBG('notez:error');
const __dirname = approotdir;


// import { InMemoryNotesStore } from './models/notes-memory.mjs';
// export const NotesStore = new InMemoryNotesStore();

import { router as indexRouter, init as homeInit } from './routes/index.mjs';
import { router as notesRouter, init as notesInit } from './routes/notes.mjs';
import { router as usersRouter, initPassport } from './routes/users.mjs';

import socketio from 'socket.io';
import passportSocketIo from 'passport.socketio';

import session from 'express-session';
// For compatible session store packages, see:
//      http://expressjs.com/en/resources/middleware/session.html#compatible-session-stores
// Uncomment this for session-file-store
import sessionFileStore from 'session-file-store';
const FileStore = sessionFileStore(session);
// Uncomment this for connect-loki
// import sessionLokiStore from 'connect-loki';
// const LokiStore = sessionLokiStore(session);
// Uncomment this for memorystore
// import sessionMemoryStore from 'memorystore';
// const MemoryStore = sessionMemoryStore(session);
export const sessionCookieName = 'notescookie.sid';
// secret: 'keyboard mouse',
const sessionSecret = 'keyboard mouse';
// store: new FileStore({ path: 'sessions' }),
const sessionStore = new FileStore({ path: "sessions" });

import { useModel as useNotesModel } from './models/notes-store.mjs';
useNotesModel(process.env.NOTES_MODEL ? process.env.NOTES_MODEL : "memory")
  .then(store => {
    debug(`Using NotesStore ${store}`);
    homeInit();
    notesInit();
  })
  // .then(store => { debug(`Using NotesStore ${store}`); })
  .catch(error => { onError({ code: 'ENOTESSTORE', error }); });

export const app = express();

export const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

export const server = http.createServer(app);

server.listen(port);
server.on('request', (req, res) => {
  debug(`${new Date().toISOString()} request ${req.method} ${req.url}`);
});
server.on('error', onError);
server.on('listening', onListening);

export const io = socketio(server);

io.use(passportSocketIo.authorize({
  cookieParser: cookieParser,
  key: sessionCookieName,
  secret: sessionSecret,
  store: sessionStore
}));

// TODO is success and fail callbacks required or useful?  These are marked optional.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

app.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev', {
  stream: process.env.REQUEST_LOG_FILE ?
    rfs.createStream(process.env.REQUEST_LOG_FILE, {
      size: '10M',     // rotate every 10 MegaBytes written
      interval: '1d',  // rotate daily
      compress: 'gzip' // compress rotated files
    })
    : process.stdout
}));
if (process.env.REQUEST_LOG_FILE) {
  app.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    // Use the appropriate session store class
    // store: new MemoryStore({}),
    // store: new LokiStore({}),
    store: sessionStore,
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    name: sessionCookieName,
  })
);
initPassport(app);
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/assets/vendor/bootstrap', express.static(
// path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
// app.use('/assets/vendor/bootstrap', express.static(
// path.join(__dirname, 'theme', 'dist')));
app.use('/assets/vendor/bootstrap/js', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/assets/vendor/bootstrap/css', express.static(
  path.join(__dirname, 'slate')));
app.use('/assets/vendor/jquery', express.static(
  path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.use('/assets/vendor/popper.js', express.static(
  path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')));
app.use('/assets/vendor/feather-icons', express.static(
  path.join(__dirname, 'node_modules', 'feather-icons', 'dist')));
// Router function lists
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);

// error handlers
// catch 404 and forward to error handler
app.use(handle404);
app.use(basicErrorHandler);

// moved next 11 lines higher in code.. per socket io chapter nine
// export const port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// export const server = http.createServer(app);

// server.listen(port);
// server.on('request', (req, res) => {
//   debug(`${new Date().toISOString()} request ${req.method} ${req.url}`);
// });
// server.on('error', onError);
// server.on('listening', onListening);
