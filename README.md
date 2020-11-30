# Node.JS Web Development

By David Herron
July 2020

## Build scalable web applications using Node.js, Express.js, and the latest ECMAScript techniques, along with deploying applications with AWS and Docker with this updated fifth edition

---

---

## Chapter 05

---

---

### Ch05 section 6

**_`Creating the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
mkdir notez
cd notez
npx express-generator@4.x --view=hbs --git .
npm install
# npm audit
npm audit fix
DEBUG=notez:* npm start
mv app.js app.mjs
mv routes/index.js routes/index.mjs
# mkdir public/assets
# mv public/images/ public/javascripts/ public/stylesheets/ public/assets/
cd ..
mv Ch05 Ch06 Ch07 Ch08 Ch09 Ch10 Ch11 Ch12 Ch13 Ch14 favicon.ico notez/public/images/
git init
git add .
git commit -m "npx Express Generator"
git remote add origin https://github.com/TurtleWolf/Notez.git
git push --set-upstream origin master
npm i cross-env
```

---

### Ch05 section 7

**_`Rewriting the generated router module as an ES6 module`_**

<!-- favicon fails to respond early on, I think this is because of the conversion to ES6 modules -->

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
npm i cross-env
```

---

### Ch05 section 8

**_`Creating the Notes application wiring – app.mjs`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
touch approotdir.mjs
touch appsupport.mjs
```

---

### Ch05 section 9

**_`Implementing the Notes data storage model`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
mkdir models
touch models/Notes.mjs
```

---

### Ch05 section 10

**_`Data hiding in ES-2015 class definitions`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
delete?? theoretical
```

---

### Ch05 section 11

**_`Implementing an in-memory Notes datastore`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
touch models/notes-memory.mjs
```

---

### Ch05 section 12

**_`The Notes home page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
mkdir partials
touch partials/header.hbs
DEBUG=notez:* npm start
```

---

### Ch05 section 13

**_`Adding a new note – create`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
 touch routes/notes.mjs
 touch views/noteedit.hbs
```

---

### Ch05 section 14

**_`Viewing notes – read`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
touch views/noteview.hbs
```

---

### Ch05 section 15

**_`Editing an existing note – update`_**

```javascript
// Edit note (update)
router.get('/edit', async (req, res, next) => {
  try {
    const note = await notes.read(req.query.key);
    res.render('noteedit', {
      title: note ? 'Edit ' + note.title : 'Add a Note',
      docreate: false,
      notekey: req.query.key,
      note: note,
    });
  } catch (err) {
    next(err);
  }
});
```

```bash section 15
null
```

---

### Ch05 section 16

**_`Editing an existing note – update`_**

#### **routes/notes.mjs**

```javascript
// Ask to Delete note (destroy)
router.get('/destroy', async (req, res, next) => {
  try {
    const note = await notes.read(req.query.key);
    res.render('notedestroy', {
      title: note ? note.title : '',
      notekey: req.query.key,
      note: note,
    });
  } catch (err) {
    next(err);
  }
});

// Really destroy note (destroy)
router.post('/destroy/confirm', async (req, res, next) => {
  try {
    await notes.destroy(req.body.notekey);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});
```

```bash section 16
touch views/notedestroy.hbs
```

#### **views/notedestroy.hbs**

```javascript
<form method='POST' action='/notes/destroy/confirm'>
<input type='hidden' name='notekey' value='{{#if note}}{{notekey}}{{/if}}'>
<p>Delete {{note.title}}?</p>
<br/><input type='submit' value='DELETE' />
<a href="/notes/view?key={{#if note}}{{notekey}}{{/if}}">Cancel</a>
</form>
```

---

### Ch05 section 17

**_`Theming your Express application`_**

```bash section 17
null
```

#### **public/stylesheets/style.css**

```javascript
body {
  padding: 5px;
  ..
}
..
header {
    background: #eeeeee;
    padding: 5px;
} rt * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch05 section 18

**_`Scaling up – running multiple Notes instances`_**

```bash section 18
null
```

#### **notez/package.json**

```javascript
 "scripts": {
    "start": "cross-env DEBUG=notez:* node ./app.mjs",
    "server1": "cross-env DEBUG=notez:* PORT=3001 node ./app.mjs",
    "server2": "cross-env DEBUG=notez:* PORT=3002 node ./app.mjs"
  },
```

---

### Ch05 section 19

**_`Summary`_**

```bash section 19
null
```

```javascript
null;
```

---

---

## Chapter 06

---

---

### CH06 section 1

**_`Implementing the Mobile-First Paradigm`_**

```bash section 1
null
```

```javascript
null;
```

---

### CH06 section 2

**_`Understanding the problem – the Notes app isn't mobile-friendly`_**

```bash section 2
null
```

#### **views/noteedit.hbs**

```javascript
<br/><textarea rows=5 cols=80 name='body'
    >{{#if note }}{{note.body}}{{/if}}</textarea>
```

---

### CH06 section 3

**_`Learning the mobile-first paradigm theory`_**

```bash section 3
null
```

#### **notez/public/stylessheets/styles.css**

```CSS
@media screen and (min-width: 600px) { /* Screens above 600px width */ }
@media screen and (min-width: 960px) { /* Screens above 960px width */ }
```

---

### CH06 section 4

**_`Using Twitter Bootstrap on the Notes application`_**

```bash section 4
null
```

```javascript
null;
```

---

### CH06 section 5

**_`Setting up Bootstrap`_**

```bash section 5
npm i bootstrap@4.5.x
npm i jquery@3.5.x
npm i popper.js@1.16.x
ls node_modules/bootstrap/dist/*
ls node_modules/jquery/dist
ls node_modules/popper.js/dist
```

```javascript
null;
```

---

### CH06 section 6

**_`Adding Bootstrap to the Notes application`_**

```bash section 6
mkdir public/assets
mv public/images/ public/javascripts/ public/stylesheets/ public/assets/
```

#### **notez/views/layout.hbs**

```html
<link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/assets/stylesheets/style.css" />
<!-- ... -->
<script src="/assets/vendor/jquery/jquery.min.js"></script>
<script src="/assets/vendor/popper.js/popper.min.js"></script>
<script src="/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
```

#### **notez/app.mjs**

```javascript
app.use(
  '/assets/vendor/bootstrap',
  express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist'))
);
app.use(
  '/assets/vendor/jquery',
  express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist'))
);
app.use(
  '/assets/vendor/popper.js',
  express.static(
    path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')
  )
);
```

---

### CH06 section 7

**_`Alternative layout frameworks`_**

```bash section 7
null
```

```javascript
null;
```

---

### CH06 section 8

**_`Flexbox and CSS Grids`_**

```bash section 8
null
```

```javascript
null;
```

---

### CH06 section 9

**_`Mobile-first design for the Notes application`_**

```bash section 9
null
```

```javascript
null;
```

---

### CH06 section 10

**_`Laying the Bootstrap grid foundation`_**

```bash section 10
null
```

```javascript
null;
```

---

### CH06 section 11

**_`Responsive page structure for the Notes application`_**

```bash section 11
null
```

#### **notez/views/layout.hbs**

```javascript
null;
```

---

### CH06 section 12

**_`Using icon libraries and improving visual appeal`_**

```bash section 12
npm i feather-icons@4.25.x
```

#### **notez/app.mjs**

```javascript
app.use(
  '/assets/vendor/feather-icons',
  express.static(path.join(__dirname, 'node_modules', 'feather-icons', 'dist'))
);
```

#### **notez/views/layout.hbs**

```javascript
<script src="/assets/vendor/feather-icons/feather.js"></script>
<script>
  feather.replace();
</script>
```

---

### CH06 section 13

**_`Responsive page header navigation bar`_**

```bash section 13
null
```

#### **notez/partials/header.hbs**

```html
<header class="page-header">
  <h3>{{ title }}</h3>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/"><i data-feather="home"></i></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav col">
        {{#if breadcrumb}}
        <a class="nav-item nav-link" href="{{breadcrumb.url}}">
          {{breadcrumb.title}}</a
        >
        {{/if}}
      </div>
      <a class="nav-item nav-link btn btn-light col-auto" href="/notes/add"
        >ADD Note</a
      >
    </div>
  </nav>
</header>
```

---

### CH06 section 14

**_`Improving the Notes list on the front page`_**

```bash section 14
null
```

#### **notez/view/index.hbs**

```hbs
<div class="container-fluid">
  <div class="row">
    <div class="col-12 btn-group-vertical" role="group">
      {{#each notelist}}
      <a class="btn btn-lg btn-block btn-outline-dark"
         href="/notes/view?key={{ key }}">{{ title }}</a>
      {{/each}}
    </div>
  </div>
</div>
```

#### **notez/partials/header.hbs**

```hbs
{{!-- <h5>{{ title }}</h5> --}}
<!-- ... -->
<span class="navbar-text col">
    <h2>{{ title }}</h2>
</span>
```

---

### CH06 section 15

**_`Cleaning up the note viewing experience`_**

```bash section 15
null
```

#### **notez/noteview.hbs**

```hbs
<div class="container-fluid">
    <div class="row"><div class="col-xs-12">
        {{#if note}}<h3>{{ note.title }}</h3>{{/if}}
        {{#if note}}<p>{{ note.body }}</p>{{/if}}
        <p>Key: {{ notekey }}</p>
    </div></div>
    {{#if notekey }}
      <div class="row"><div class="col-xs-12">
      <div class="btn-group">
        <a class="btn btn-outline-dark"
           href="/notes/destroy?key={{notekey}}"
           role="button">Delete</a>
        <a class="btn btn-outline-dark"
           href="/notes/edit?key={{notekey}}"
           role="button">Edit</a>
     </div>
     </div></div>
   {{/if}}
</div>
```

---

### CH06 section 16

**_`Cleaning up the add/edit note form`_**

```bash section 16
null
```

#### **notez/views/noteedit.hbs**

```hbs
<form method='POST' action='/notes/save'>
    <div class="container-fluid">
        {{#if docreate}}
        <input type='hidden' name='docreate' value="create">
        {{else}}
        <input type='hidden' name='docreate' value="update">
        {{/if}}
        <div class="form-group row align-items-center">
            <label for="notekey" class="col-1 col-form-label">Key</label>
            {{#if docreate }}
            <div class="col">
                <input type='text' class="form-control" placeholder="note key" name='notekey' value='' />
            </div>
            {{else}}
            {{#if note }}
            <span class="input-group-text">{{notekey}}</span>
            {{/if}}
            <input type='hidden' name='notekey' value='{{#if note }}{{notekey}}{{/if}}' />
            {{/if}}
        </div>

        <div class="form-group row">
            <label for="title" class="col-1 col-form-label">Title</label>
            <div class="col">
                <input type="text" class="form-control" id='title' name='title' placeholder="note title"
                    value='{{#if note }}{{note.title}}{{/if}}'>
            </div>
        </div>

        <div class="form-group row">
            <textarea class="form-control" name='body' rows="5">{{#if note }}{{note.body}}{{/if}}</textarea>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
    </div>
</form>
```

---

### CH06 section 17

**_`Cleaning up the delete-note window`_**

```bash section 17
null
```

#### **notez/views/notedestroy.hbs**

```hbs
<form method='POST' action='/notes/destroy/confirm'>
    <div class="container-fluid">
        <input type='hidden' name='notekey' value='
     {{#if note}}{{notekey}}{{/if}}'>
        <p class="form-text">Delete {{note.title}}?</p>
        <div class="btn-group">
            <button type="submit" value='DELETE' class="btn btn-outline-dark">DELETE</button>
            <a class="btn btn-outline-dark" href="/notes/view?key={{#if note}}{{notekey}}{{/if}}" role="button">
                Cancel</a>
        </div>
    </div>
</form>
```

#### **notez/routes/notes.mjs**

```mjs
`Delete ${note.title}`;
```

---

### CH06 section 18

**_`Customizing a Bootstrap build`_**

```bash section 18
mkdir theme
cd theme
npm init
touch .gitignore
touch _custom.scss
npm run build
```

#### **notez/theme/package.json**

```json
  "scripts": {
    "download": "wget -O - https://github.com/twbs/bootstrap/archive/v4.5.0.tar.gz | tar xvfz -",
    "postdownload": "cd bootstrap-4.5.0 && npm install",
    "clean": "rm -rf bootstrap-4.5.0",
    "prebuild": "cp _custom.scss bootstrap.scss bootstrap-4.5.0/scss",
    "build": "cd bootstrap-4.5.0 && npm run dist",
    "postbuild": "mkdir -p dist && cp -r bootstrap-4.5.0/dist .",
    "watch": "cd bootstrap-4.5.0 && npm run watch"
  },
```

#### **notez/theme/.gitignore**

```.gitignore
bootstrap-4.*
```

#### **notez/views/index.hbs**

#### **notez/views/notedestroy.hbs**

#### **notez/views/noteedit.hbs**

#### **notez/views/noteview.hbs**

```hbs
btn-outline-light
btn-outline-light
```

---

### CH06 section 19

**_`Using third-party custom Bootstrap themes`_**

#### **notez/package.json**

```json
"scripts": {
  "dl-slate": "mkdir -p slate && npm run dl-slate-css && npm run dl-slate-min-css",
  "dl-slate-css": "wget https://bootswatch.com/4/slate/bootstrap.css -O slate/bootstrap.css",
  "dl-slate-min-css": "wget https://bootswatch.com/4/slate/bootstrap.min.css -O slate/bootstrap.min.css"
},
```

```bash section 19
npm run dl-slate
```

#### **notez/app.mjs**

```javascript
// app.use('/assets/vendor/bootstrap', express.static(
// path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
// app.use('/assets/vendor/bootstrap', express.static(
// path.join(__dirname, 'theme', 'dist')));
app.use(
  '/assets/vendor/bootstrap/js',
  express.static(
    path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')
  )
);
app.use(
  '/assets/vendor/bootstrap/css',
  express.static(path.join(__dirname, 'slate'))
);
```

#### **notez/partials/header.hbs**

```hbs
<a class="nav-item nav-link btn btn-secondary col-auto" href='/notes/add'>Add Note</a>
```

---

### CH06 section 20

**_`Summary`_**

```bash section 20
null
```

#### **notez/namethisFILE**

```javascript
null;
```

---

---

## Chapter 07

---

---

### CH07 section 1

**_`Data Storage and Retrieval`_**

```bash section 1
null
```

```javascript
null;
```

---

### CH07 section 2

**_`Remembering that data storage requires asynchronous code`_**

```bash section 2
null
```

```javascript
null;
```

---

### CH07 section 3

**_`Logging and capturing uncaught errors`_**

```bash section 3
null
```

```javascript
null;
```

---

### CH07 section 4

**_`Request logging with morgan`_**

```bash section 4
npm i rotating-file-stream
```

#### **notez/app.mjs**

```javascript
import { default as rfs } from 'rotating-file-stream';
// ...
app.use(
  logger(process.env.REQUEST_LOG_FORMAT || 'dev', {
    // immediate: true,
    stream: process.env.REQUEST_LOG_FILE
      ? rfs.createStream(process.env.REQUEST_LOG_FILE, {
          size: '10M', // rotate every 10 MegaBytes written
          interval: '1d', // rotate daily
          compress: 'gzip', // compress rotated files
        })
      : process.stdout,
  })
);

if (process.env.REQUEST_LOG_FILE) {
  app.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev'));
}
```

#### **notez/package.json**

```json
{
  "scripts": {
    "start": "cross-env REQUEST_LOG_FILE=log.txt REQUEST_LOG_FORMAT=common DEBUG=notez:* node ./app.mjs",
    "server1": "cross-env REQUEST_LOG_FILE=log.txt REQUEST_LOG_FORMAT=common DEBUG=notez:* PORT=3001 node ./app.mjs",
    "server2": "cross-env REQUEST_LOG_FILE=log.txt REQUEST_LOG_FORMAT=common DEBUG=notez:* PORT=3002 node ./app.mjs"
    // "dl-slate": "mkdir -p slate && npm run dl-slate-css && npm run dl-slate-min-css",
    // "dl-slate-css": "wget https://bootswatch.com/4/slate/bootstrap.css -O slate/bootstrap.css",
    // "dl-slate-min-css": "wget https://bootswatch.com/4/slate/bootstrap.min.css -O slate/bootstrap.min.css"
  }
}
```

---

### CH07 section 5

**_`Debugging messages`_**

```bash section 5
null
```

#### **notez/app.mjs**

```javascript
// ...
import { default as DBG } from 'debug';
const debug = DBG('notes:debug');
const dbgerror = DBG('notes:error');
// ...
server.on('request', (req, res) => {
  debug(`${new Date().toISOString()} request ${req.method} ${req.url}`);
});
```

#### **notez/appsupport.mjs**

```javascript
import { default as DBG } from 'debug';
const debug = DBG('notes:debug');
const dbgerror = DBG('notes:error');
// ...
// export function onError(error) {
dbgerror(error);
// if (error.syscall !== 'listen') {
// throw error;
// }

// export function onListening() {
//     const addr = server.address();
//     const bind = typeof addr === 'string'
//         ? 'pipe ' + addr
//         : 'port ' + addr.port;
debug(`Listening on ${bind}`);
// }
```

---

### CH07 section 6

**_`Capturing stdout and stderr`_**

```bash section 6
null
```

[https://www.npmjs.com/package/capture-console](https://www.npmjs.com/package/capture-console 'capture-console')

```javascript
null;
```

---

### CH07 section 7

**_`Capturing uncaught exceptions and unhandled rejected Promises`_**

```bash section 7
null
```

#### **notez/appsupport.mjs**

```javascript
process.on('uncaughtException', function (err) {
  console.error(`I've crashed!!! - ${err.stack || err}`);
});

import * as util from 'util';
process.on('unhandledRejection', (reason, p) => {
  console.error(`Unhandled Rejection at: ${util.inspect(p)} reason: ${reason}`);
});
```

---

### CH07 section 8

**_`Storing notes in a filesystem`_**

```bash section 8
npm i fs-extra
touch models/notes-fs.mjs
```

#### **notez/models/Notes.mjs**

```javascript
export class Note {
  // constructor(key, title, body) {
  //     this[_note_key] = key;
  //     this[_note_title] = title;
  //     this[_note_body] = body;
  // }

  // get key() { return this[_note_key]; }
  // get title() { return this[_note_title]; }
  // set title(newTitle) { this[_note_title] = newTitle; }
  // get body() { return this[_note_body]; }
  // set body(newBody) { this[_note_body] = newBody; }

  get JSON() {
    return JSON.stringify({
      key: this.key,
      title: this.title,
      body: this.body,
    });
  }

  static fromJSON(json) {
    const data = JSON.parse(json);
    if (
      typeof data !== 'object' ||
      !data.hasOwnProperty('key') ||
      typeof data.key !== 'string' ||
      !data.hasOwnProperty('title') ||
      typeof data.title !== 'string' ||
      !data.hasOwnProperty('body') ||
      typeof data.body !== 'string'
    ) {
      throw new Error(`Not a Note: ${json}`);
    }
    const note = new Note(data.key, data.title, data.body);
    return note;
  }
}
```

#### **notez/models/notes-fs.mjs**

```javascript
import fs from 'fs-extra';
import path from 'path';
import util from 'util';
import { approotdir } from '../approotdir.mjs';
import { Note, AbstractNotesStore } from './Notes.mjs';
import { default as DBG } from 'debug';
const debug = DBG('notes:notes-fs');
const error = DBG('notes:error-fs');
    }

export default class FSNotesStore extends AbstractNotesStore {

  async close() { }

  async update(key, title, body) { return crupdate(key, title, body);
   }
  async create(key, title, body) { return crupdate(key, title, body);
   }

  async read(key) {
    const notesdir = await notesDir();
    const thenote = await readJSON(notesdir, key);
    return thenote;
  }

  async destroy(key) {
    const notesdir = await notesDir();
    await fs.unlink(filePath(notesdir, key));
  }

  async keylist() {
    const notesdir = await notesDir();
    let filez = await fs.readdir(notesdir);
    if (!filez || typeof filez === 'undefined') filez = [];
    const thenotes = filez.map(async fname => {
        const key = path.basename(fname, '.json');
        const thenote = await readJSON(notesdir, key);
        return thenote.key;
    });
    return Promise.all(thenotes);
  }

  async count() {
    const notesdir = await notesDir();
    const filez = await fs.readdir(notesdir);
    return filez.length;
  }
}

async function notesDir() {
  const dir = process.env.NOTES_FS_DIR
    || path.join(approotdir, 'notes-fs-data');
  await fs.ensureDir(dir);
  return dir;
}

const filePath = (notesdir, key) => path.join(notesdir, `${key}.json`);

async function readJSON(notesdir, key) {
  const readFrom = filePath(notesdir, key);
  const data = await fs.readFile(readFrom, 'utf8');
  return Note.fromJSON(data);
}

async function crupdate(key, title, body) {
  const notesdir = await notesDir();
  if (key.indexOf('/') >= 0) {
    throw new Error(`key ${key} cannot contain '/'`);
  }
  const note = new Note(key, title, body);
  const writeTo = filePath(notesdir, key);
  const writeJSON = note.JSON;
  await fs.writeFile(writeTo, writeJSON, 'utf8');
  return note;
}
```

---

### CH07 section 9

**_`Dynamically importing ES6 modules`_**

```bash section 9
touch models/notes-store.mjs
```

#### **notez/models/notes-store.mjs**

```javascript
import { default as DBG } from 'debug';
const debug = DBG('notes:notes-store');
const error = DBG('notes:error-store');

var _NotesStore;

export async function useModel(model) {
  try {
    let NotesStoreModule = await import(`./notes-${model}.mjs`);
    let NotesStoreClass = NotesStoreModule.default;
    _NotesStore = new NotesStoreClass();
    return _NotesStore;
  } catch (err) {
    throw new Error(`No recognized NotesStore in ${model} because
          ${err}`);
  }
}

export { _NotesStore as NotesStore };
```

#### **notez/models/notes-memory.mjs**

```javascript
export default class InMemoryNotesStore extends AbstractNotesStore { ... }
```

#### **notez/app.mjs**

```javascript
// import { InMemoryNotesStore } from './models/notes-memory.mjs';
// export const NotesStore = new InMemoryNotesStore();

// import { router as indexRouter } from './routes/index.mjs';
// import { router as notesRouter } from './routes/notes.mjs';

import { useModel as useNotesModel } from './models/notes-store.mjs';
useNotesModel(process.env.NOTES_MODEL ? process.env.NOTES_MODEL : 'memory')
  .then((store) => {})
  .then((store) => {
    debug(`Using NotesStore ${store}`);
  })
  .catch((error) => {
    onError({ code: 'ENOTESSTORE', error });
  });
```

#### **notez/appsupport.mjs**

```javascript
export function onError(error) {
  // dbgerror(error);
  // if (error.syscall !== 'listen') {
  //     throw error;
  // }

  // const bind = typeof port === 'string'
  //     ? 'Pipe ' + port
  //     : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    // case 'EACCES':
    //     console.error(`${bind} requires elevated privileges`);
    //     process.exit(1);
    //     break;
    // case 'EADDRINUSE':
    //     console.error(`${bind} is already in use`);
    //     process.exit(1);
    //     break;
    case 'ENOTESSTORE':
      console.error(
        `Notes data store initialization failure because `,
        error.error
      );
      process.exit(1);
      break;
    // default:
    //     throw error;
  }
}
```

#### **notez/routes/index.mjs & routes/notes.mjs**

```javascript
// import { default as express } from 'express';
import { NotesStore as notes } from '../models/notes-store.mjs';
// export const router = express.Router();
```

---

### CH07 section 10

**_`Running the Notes application with filesystem storage`_**

```bash section 10
DEBUG=notez:* npm run fs-start
```

#### **notez/package.json**

```json
{
  "fs-start": "cross-env DEBUG=notes:* PORT=3000 NOTES_MODEL=fs node ./app.mjs",
  "fs-server1": "cross-env NOTES_MODEL=fs PORT=3001 node ./app.mjs",
  "fs-server2": "cross-env NOTES_MODEL=fs PORT=3002 node ./app.mjs"
}
```

---

### CH07 section 11

**_`Storing notes with the LevelDB datastore`_**

```bash section 11
npm i level@6.x
touch models/notes-level.mjs
```

#### **notez/models/notes-level.mjs**

```javascript
import util from 'util';
import { Note, AbstractNotesStore } from './Notes.mjs';
import level from 'level';
import { default as DBG } from 'debug';
const debug = DBG('notes:notes-level');
const error = DBG('notes:error-level');

let db;

async function connectDB() {
  if (typeof db !== 'undefined' || db) return db;
  db = await level(process.env.LEVELDB_LOCATION || 'notes.level', {
    createIfMissing: true,
    valueEncoding: 'json',
  });
  return db;
}

export default class LevelNotesStore extends AbstractNotesStore {
  async close() {
    const _db = db;
    db = undefined;
    return _db ? _db.close() : undefined;
  }

  async update(key, title, body) {
    return crupdate(key, title, body);
  }
  async create(key, title, body) {
    return crupdate(key, title, body);
  }

  async read(key) {
    const db = await connectDB();
    const note = Note.fromJSON(await db.get(key));
    return note;
  }

  async destroy(key) {
    const db = await connectDB();
    await db.del(key);
  }

  async keylist() {
    const db = await connectDB();
    const keyz = [];
    await new Promise((resolve, reject) => {
      db.createKeyStream()
        .on('data', (data) => keyz.push(data))
        .on('error', (err) => reject(err))
        .on('end', () => resolve(keyz));
    });
    return keyz;
  }

  async count() {
    const db = await connectDB();
    var total = 0;
    await new Promise((resolve, reject) => {
      db.createKeyStream()
        .on('data', (data) => total++)
        .on('error', (err) => reject(err))
        .on('end', () => resolve(total));
    });
    return total;
  }
}

async function crupdate(key, title, body) {
  const db = await connectDB();
  const note = new Note(key, title, body);
  await db.put(key, note.JSON);
  return note;
}
```

#### **notez/package.json**

```json
{
  "level-start": "cross-env DEBUG=notes:* PORT=3000 NOTES_MODEL=level node ./app.mjs"
}
```

```bash section 11
npm run level-start
```

---

### CH07 section 12

**_`Closing database connections when closing the process`_**

#### **notez/appsupport.mjs**

```javascript
import { NotesStore } from './models/notes-store.mjs';

async function catchProcessDeath() {
  debug('urk...');
  await NotesStore.close();
  await server.close();
  process.exit(0);
}

process.on('SIGTERM', catchProcessDeath);
process.on('SIGINT', catchProcessDeath);
process.on('SIGHUP', catchProcessDeath);

process.on('exit', () => {
  debug('exiting...');
});
```

```bash section 12
npm run level-start
```

---

### CH07 section 13

**_`Storing notes in SQL with SQLite3`_**

```bash section 13
npm i sqlite3@5.x
```

```javascript
null;
```

---

### CH07 section 14

**_`The SQLite3 database schema`_**

#### **notez/models/schema-sqlite3.sql**

```bash section 14
touch models/schema-sqlite3.sql
```

```sql
CREATE TABLE IF NOT EXISTS notes (
    notekey VARCHAR(255),
    title VARCHAR(255),
    body TEXT
);
```

```bash section 14
sqlite3 chap07.sqlite3
```

#### **notez/package.json**

```json
{
  "sqlite3-setup": "sqlite3 chap07.sqlite3 --init models/schema-sqlite3.sql"
}
```

```bash section 14
npm run sqlite3-setup
ls -l chap07.sqlite3
```

---

### CH07 section 15

**_`The SQLite3 model code`_**

```bash section 15
touch models/notes-sqlite3.mjs
```

#### **notez/models/notes-sqlite3.mjs**

```javascript
import util from 'util';
import { Note, AbstractNotesStore } from './Notes.mjs';
import { default as sqlite3 } from 'sqlite3';
import { default as DBG } from 'debug';
const debug = DBG('notes:notes-sqlite3');
const error = DBG('notes:error-sqlite3');

var db;

async function connectDB() {
  if (db) return db;
  const dbfile = process.env.SQLITE_FILE || 'notes.sqlite3';
  await new Promise((resolve, reject) => {
    db = new sqlite3.Database(
      dbfile,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) return reject(err);
        debug(`Opened SQLite3 database ${dbfile} db=${util.inspect(db)}`);
        resolve(db);
      }
    );
  });
  return db;
}

export default class SQLITE3NotesStore extends AbstractNotesStore {
  async close() {
    const _db = db;
    db = undefined;
    return _db
      ? new Promise((resolve, reject) => {
          _db.close((err) => {
            if (err) reject(err);
            else resolve();
          });
        })
      : undefined;
  }

  async update(key, title, body) {
    const db = await connectDB();
    const note = new Note(key, title, body);
    await new Promise((resolve, reject) => {
      db.run(
        'UPDATE notes ' + 'SET title = ?, body = ? ' + 'WHERE notekey = ?',
        [title, body, key],
        (err) => {
          if (err) return reject(err);
          debug(`UPDATE ${util.inspect(note)}`);
          resolve(note);
        }
      );
    });
    return note;
  }

  async create(key, title, body) {
    const db = await connectDB();
    const note = new Note(key, title, body);
    await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO notes ( notekey, title, body) ' + 'VALUES ( ?, ? , ? );',
        [key, title, body],
        (err) => {
          if (err) return reject(err);
          debug(`CREATE ${util.inspect(note)}`);
          resolve(note);
        }
      );
    });
    return note;
  }

  async read(key) {
    const db = await connectDB();
    const note = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM notes WHERE notekey = ?', [key], (err, row) => {
        if (err) return reject(err);
        const note = new Note(row.notekey, row.title, row.body);
        debug(`READ ${util.inspect(note)}`);
        resolve(note);
      });
    });
    return note;
  }

  async destroy(key) {
    const db = await connectDB();
    return await new Promise((resolve, reject) => {
      db.run('DELETE FROM notes WHERE notekey = ?;', [key], (err) => {
        if (err) return reject(err);
        debug(`DESTROY ${key}`);
        resolve();
      });
    });
  }

  async keylist() {
    const db = await connectDB();
    debug(`keylist db=${util.inspect(db)}`);
    const keyz = await new Promise((resolve, reject) => {
      const keyz = [];
      db.all('SELECT notekey FROM notes', (err, rows) => {
        if (err) return reject(err);
        resolve(
          rows.map((row) => {
            return row.notekey;
          })
        );
      });
    });
    return keyz;
  }

  async count() {
    const db = await connectDB();
    const count = await new Promise((resolve, reject) => {
      db.get('select count(notekey) as count from notes', (err, row) => {
        if (err) return reject(err);
        resolve(row.count);
      });
    });
    return count;
  }
}
```

---

### CH07 section 16

**_`Running Notes with SQLite3`_**

#### **notez/package.json**

```json
{
  "sqlite3-setup": "sqlite3 chap07.sqlite3 --init models/schema-sqlite3.sql",
  "sqlite3-start": "cross-env SQLITE_FILE=chap07.sqlite3 DEBUG=notes:* NOTES_MODEL=sqlite3 node ./app.mjs",
  "sqlite3-server1": "cross-env SQLITE_FILE=chap07.sqlite3 NOTES_MODEL=sqlite3 PORT=3001 node ./app.mjs",
  "sqlite3-server2": "cross-env SQLITE_FILE=chap07.sqlite3 NOTES_MODEL=sqlite3 PORT=3002 node ./app.mjs"
}
```

```bash section 16
npm run sqlite3-start
sqlite3 chap07.sqlite3
sqlite> select * from notes;
```

```javascript
null;
```

---

### CH07 section 17

**_`Storing notes the ORM way with Sequelize`_**

```bash section 17
npm i sequelize@6.x
npm i js-yaml@3.13.x
```

```javascript
null;
```

---

### CH07 section 18

**_`Configuring Sequelize and connecting to a database`_**

```bash section 18
touch models/sequlz.mjs
touch models/sequelize-sqlite.yaml
touch models/sequelize-mysql.yaml
```

#### **notez/models/sequlz.mjs**

```javascript
import { promises as fs } from 'fs';
import { default as jsyaml } from 'js-yaml';
import Sequelize from 'sequelize';

let sequlz;

export async function connectDB() {
  if (typeof sequlz === 'undefined') {
    const yamltext = await fs.readFile(process.env.SEQUELIZE_CONNECT, 'utf8');
    const params = jsyaml.safeLoad(yamltext, 'utf8');

    if (
      typeof process.env.SEQUELIZE_DBNAME !== 'undefined' &&
      process.env.SEQUELIZE_DBNAME !== ''
    ) {
      params.dbname = process.env.SEQUELIZE_DBNAME;
    }
    if (
      typeof process.env.SEQUELIZE_DBUSER !== 'undefined' &&
      process.env.SEQUELIZE_DBUSER !== ''
    ) {
      params.username = process.env.SEQUELIZE_DBUSER;
    }
    if (
      typeof process.env.SEQUELIZE_DBPASSWD !== 'undefined' &&
      process.env.SEQUELIZE_DBPASSWD !== ''
    ) {
      params.password = process.env.SEQUELIZE_DBPASSWD;
    }
    if (
      typeof process.env.SEQUELIZE_DBHOST !== 'undefined' &&
      process.env.SEQUELIZE_DBHOST !== ''
    ) {
      params.params.host = process.env.SEQUELIZE_DBHOST;
    }
    if (
      typeof process.env.SEQUELIZE_DBPORT !== 'undefined' &&
      process.env.SEQUELIZE_DBPORT !== ''
    ) {
      params.params.port = process.env.SEQUELIZE_DBPORT;
    }
    if (
      typeof process.env.SEQUELIZE_DBDIALECT !== 'undefined' &&
      process.env.SEQUELIZE_DBDIALECT !== ''
    ) {
      params.params.dialect = process.env.SEQUELIZE_DBDIALECT;
    }

    sequlz = new Sequelize(
      params.dbname,
      params.username,
      params.password,
      params.params
    );
    await sequlz.authenticate();
  }
  return sequlz;
}

export async function close() {
  if (sequlz) sequlz.close();
  sequlz = undefined;
}
```

#### **notez/models/sequelize-sqlite.yaml**

```yaml
dbname: notes
username:
password:
params:
  dialect: sqlite
  storage: notes-sequelize.sqlite3
```

#### **notez/models/sequelize-mysql.yaml**

```yaml
dbname: notes
username: .. user name
password: .. password
params:
  host: localhost
  port: 3306
  dialect: mysql
```

```bash section 18
npm i mysql@2.x
```

---

### CH07 section 19

**_`Creating a Sequelize model for the Notes application`_**

```bash section 19
touch models/notes-sequelize.mjs
```

#### **notez/models/notes-sequelize.mjs**

```javascript
import { Note, AbstractNotesStore } from './Notes.mjs';
import Sequelize from 'sequelize';
import { connectDB as connectSequlz, close as closeSequlz } from './sequlz.mjs';
import DBG from 'debug';
const debug = DBG('notes:notes-sequelize');
const error = DBG('notes:error-sequelize');

let sequelize;
export class SQNote extends Sequelize.Model {}

async function connectDB() {
  if (sequelize) return;
  sequelize = await connectSequlz();
  SQNote.init(
    {
      notekey: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      title: Sequelize.DataTypes.STRING,
      body: Sequelize.DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'SQNote',
    }
  );
  await SQNote.sync();
}

export default class SequelizeNotesStore extends AbstractNotesStore {
  async close() {
    closeSequlz();
    sequelize = undefined;
  }

  async update(key, title, body) {
    await connectDB();
    const note = await SQNote.findOne({ where: { notekey: key } });
    if (!note) {
      throw new Error(`No note found for ${key}`);
    } else {
      await SQNote.update(
        {
          title: title,
          body: body,
        },
        {
          where: { notekey: key },
        }
      );
      return this.read(key);
    }
  }

  async create(key, title, body) {
    await connectDB();
    const sqnote = await SQNote.create({
      notekey: key,
      title: title,
      body: body,
    });
    return new Note(sqnote.notekey, sqnote.title, sqnote.body);
  }

  async read(key) {
    await connectDB();
    const note = await SQNote.findOne({ where: { notekey: key } });
    debug(note);
    if (!note) {
      throw new Error(`No note found for ${key}`);
    } else {
      return new Note(note.notekey, note.title, note.body);
    }
  }

  async destroy(key) {
    await connectDB();
    await SQNote.destroy({ where: { notekey: key } });
    debug(`DESTROY ${key}`);
  }

  async keylist() {
    await connectDB();
    const notes = await SQNote.findAll({ attributes: ['notekey'] });
    const notekeys = notes.map((note) => note.notekey);
    debug(`KEYLIST ${notekeys}`);
    return notekeys;
  }

  async count() {
    await connectDB();
    const count = await SQNote.count();
    debug(`COUNT ${count}`);
    return count;
  }
}
```

---

### CH07 section 20

**_`Running the Notes application with Sequelize`_**

#### **notez/package.json**

```json
{
  "sequelize-start": "cross-env DEBUG=notes:* SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=sequelize node ./app.mjs",
  "sequelize-server1": "cross-env SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=sequelize PORT=3001 node ./app.mjs",
  "sequelize-server2": "cross-env SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=sequelize PORT=3002 node ./a[[.mjs"
}
```

```bash section 20
npm run sequelize-start
```

---

### CH07 section 21

**_`Storing notes in MongoDB`_**

```bash section 21
mkdir data
mongod --dbpath data
```

```bash section 21
mongo
db.foo.save({ a: 1});
db.foo.find();
```

```javascript
null;
```

---

### CH07 section 22

**_`A MongoDB model for the Notes application`_**

```bash section 22
npm i mongodb@3.x
touch models/notes-mongodb.mjs
```

#### **notez/models/notes-mongodb.mjs**

```javascript
import { Note, AbstractNotesStore } from './Notes.mjs';
import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
import DBG from 'debug';
const debug = DBG('notes:notes-mongodb');
const error = DBG('notes:error-mongodb');

let client;

const connectDB = async () => {
  if (!client) client = await MongoClient.connect(process.env.MONGO_URL);
};
const db = () => {
  return client.db(process.env.MONGO_DBNAME);
};

export default class MongoDBNotesStore extends AbstractNotesStore {
  async close() {
    if (client) client.close();
    client = undefined;
  }

  async update(key, title, body) {
    await connectDB();
    const note = new Note(key, title, body);
    const collection = db().collection('notes');
    await collection.updateOne(
      { notekey: key },
      { $set: { title: title, body: body } }
    );
    return note;
  }

  async create(key, title, body) {
    await connectDB();
    const note = new Note(key, title, body);
    const collection = db().collection('notes');
    await collection.insertOne({
      notekey: key,
      title: title,
      body: body,
    });
    return note;
  }

  async read(key) {
    await connectDB();
    const collection = db().collection('notes');
    const doc = await collection.findOne({ notekey: key });
    const note = new Note(doc.notekey, doc.title, doc.body);
    return note;
  }

  async destroy(key) {
    await connectDB();
    const collection = db().collection('notes');
    const doc = await collection.findOne({ notekey: key });
    if (!doc) {
      throw new Error(`No note found for ${key}`);
    } else {
      await collection.findOneAndDelete({ notekey: key });
      this.emitDestroyed(key);
    }
  }

  async keylist() {
    await connectDB();
    debug(`keylist`);
    const collection = db().collection('notes');
    const keyz = await new Promise((resolve, reject) => {
      var keyz = [];
      collection.find({}).forEach(
        (note) => {
          keyz.push(note.notekey);
        },
        (err) => {
          if (err) reject(err);
          else resolve(keyz);
        }
      );
    });
    return keyz;
  }

  async count() {
    await connectDB();
    const collection = db().collection('notes');
    const count = await collection.count({});
    return count;
  }
}
```

---

### CH07 section 23

**_`Running the Notes application with MongoDB`_**

#### **notez/package.json**

```json
{
  "mongodb-start": "cross-env DEBUG=notes:* MONGO_URL=mongodb://localhost/ MONGO_DBNAME=chap07 NOTES_MODEL=mongodb node ./app.mjs",
  "mongodb-server1": "cross-env DEBUG=notes:* MONGO_URL=mongodb://localhost/ MONGO_DBNAME=chap07 NOTES_MODEL=mongodb PORT=3001 node ./app.mjs",
  "mongodb-server2": "cross-env DEBUG=notes:* MONGO_URL=mongodb://localhost/ MONGO_DBNAME=chap07 NOTES_MODEL=mongodb PORT=3002 node ./app.mjs"
}
```

```bash section 23
npm run mongodb-start
```

```bash section 23
mongo chap07
db.notes.find()
```

---

### CH07 section 24

**_`Summary`_**

```bash section 24
null
```

#### **notez/namethisFILE**

```javascript
null;
```

---

---

## Chapter 08

---

---

### Ch08 section 1

**_`Authenticating Users with a Microservice`_**

```bash section 1
null
```

#### **notez/namethisFILE**

```javascript
null;
```

---

### Ch08 section 2

**_`Creating a user information microservice`_**

```bash section 2
mkdir users
cd users
npm init
npm install debug@^4.1.x fs-extra@^9.x js-yaml@^3.14.x restify@^8.5.x restify-clients@^2.6.x sequelize@^6.x sqlite3@^5.x commander@^5.x cross-env@7.x bcrypt@^5.x
```

```javascript
null;
```

---

### Ch08 section 3

**_`Developing the user information model`_**

```bash section 3
touch users-sequelize.mjs
touch sequelize-sqlite.yaml
```

#### **users/users-sequelize.mjs**

```javascript
import Sequelize from 'sequelize';
import { default as jsyaml } from 'js-yaml';
import { promises as fs } from 'fs';
import * as util from 'util';
import DBG from 'debug';
const log = DBG('users:model-users');
const error = DBG('users:error');

let sequlz;

export class SQUser extends Sequelize.Model {}

export async function connectDB() {
  if (sequlz) return sequlz;

  const yamltext = await fs.readFile(process.env.SEQUELIZE_CONNECT, 'utf8');
  const params = await jsyaml.safeLoad(yamltext, 'utf8');

  if (
    typeof process.env.SEQUELIZE_DBNAME !== 'undefined' &&
    process.env.SEQUELIZE_DBNAME !== ''
  ) {
    params.dbname = process.env.SEQUELIZE_DBNAME;
  }
  if (
    typeof process.env.SEQUELIZE_DBUSER !== 'undefined' &&
    process.env.SEQUELIZE_DBUSER !== ''
  ) {
    params.username = process.env.SEQUELIZE_DBUSER;
  }
  if (
    typeof process.env.SEQUELIZE_DBPASSWD !== 'undefined' &&
    process.env.SEQUELIZE_DBPASSWD !== ''
  ) {
    params.password = process.env.SEQUELIZE_DBPASSWD;
  }
  if (
    typeof process.env.SEQUELIZE_DBHOST !== 'undefined' &&
    process.env.SEQUELIZE_DBHOST !== ''
  ) {
    params.params.host = process.env.SEQUELIZE_DBHOST;
  }
  if (
    typeof process.env.SEQUELIZE_DBPORT !== 'undefined' &&
    process.env.SEQUELIZE_DBPORT !== ''
  ) {
    params.params.port = process.env.SEQUELIZE_DBPORT;
  }
  if (
    typeof process.env.SEQUELIZE_DBDIALECT !== 'undefined' &&
    process.env.SEQUELIZE_DBDIALECT !== ''
  ) {
    params.params.dialect = process.env.SEQUELIZE_DBDIALECT;
  }

  log('Sequelize params ' + util.inspect(params));

  sequlz = new Sequelize(
    params.dbname,
    params.username,
    params.password,
    params.params
  );

  SQUser.init(
    {
      username: { type: Sequelize.STRING, unique: true },
      password: Sequelize.STRING,
      provider: Sequelize.STRING,
      familyName: Sequelize.STRING,
      givenName: Sequelize.STRING,
      middleName: Sequelize.STRING,
      emails: Sequelize.STRING(2048),
      photos: Sequelize.STRING(2048),
    },
    {
      sequelize: sequlz,
      modelName: 'SQUser',
    }
  );
  await SQUser.sync();
}

export function userParams(req) {
  return {
    username: req.params.username,
    password: req.params.password,
    provider: req.params.provider,
    familyName: req.params.familyName,
    givenName: req.params.givenName,
    middleName: req.params.middleName,
    emails: JSON.stringify(req.params.emails),
    photos: JSON.stringify(req.params.photos),
  };
}

export function sanitizedUser(user) {
  var ret = {
    id: user.username,
    username: user.username,
    provider: user.provider,
    familyName: user.familyName,
    givenName: user.givenName,
    middleName: user.middleName,
  };
  try {
    ret.emails = JSON.parse(user.emails);
  } catch (e) {
    ret.emails = [];
  }
  try {
    ret.photos = JSON.parse(user.photos);
  } catch (e) {
    ret.photos = [];
  }
  return ret;
}

export async function findOneUser(username) {
  let user = await SQUser.findOne({ where: { username: username } });
  user = user ? sanitizedUser(user) : undefined;
  return user;
}

export async function createUser(req) {
  let tocreate = userParams(req);
  await SQUser.create(tocreate);
  const result = await findOneUser(req.params.username);
  return result;
}
```

#### **users/sequelize-sqlite.yaml**

```yaml
dbname: users
username:
password:
params:
  dialect: sqlite
  storage: users-sequelize.sqlite3
```

---

### Ch08 section 4

**_`Creating a REST server for user information`_**

```bash section 4
touch user-server.mjs
```

#### **users/package.json**

```json
{
  "main": "user-server.mjs",
  "scripts": {
    "start": "cross-env DEBUG=users:* PORT=5858 SEQUELIZE_CONNECT=sequelize-sqlite.yaml node ./user-server.mjs"
  }
}
```

#### **users/user-server.mjs**

```javascript
import restify from 'restify';
import * as util from 'util';
import {
  SQUser,
  connectDB,
  userParams,
  findOneUser,
  createUser,
  sanitizedUser,
} from './users-sequelize.mjs';

import DBG from 'debug';
const log = DBG('users:service');
const error = DBG('users:error');

import { default as bcrypt } from 'bcrypt';

///////////// Set up the REST server

var server = restify.createServer({
  name: 'User-Auth-Service',
  version: '0.0.1',
});

server.use(restify.plugins.authorizationParser());
server.use(check);
server.use(restify.plugins.queryParser());
server.use(
  restify.plugins.bodyParser({
    mapParams: true,
  })
);

server.listen(process.env.PORT, 'localhost', function () {
  log(server.name + ' listening at ' + server.url);
});

process.on('uncaughtException', function (err) {
  console.error('UNCAUGHT EXCEPTION - ' + (err.stack || err));
  process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
  console.error(
    `UNHANDLED PROMISE REJECTION: ${util.inspect(p)} reason: ${reason}`
  );
  process.exit(1);
});

// Mimic API Key authentication.

var apiKeys = [{ user: 'them', key: 'D4ED43C0-8BD6-4FE2-B358-7C0E230D11EF' }];

function check(req, res, next) {
  log(`check ${util.inspect(req.authorization)}`);
  if (req.authorization && req.authorization.basic) {
    var found = false;
    for (let auth of apiKeys) {
      if (
        auth.key === req.authorization.basic.password &&
        auth.user === req.authorization.basic.username
      ) {
        found = true;
        break;
      }
    }
    if (found) next();
    else {
      res.send(401, new Error('Not authenticated'));
      error('Failed authentication check ' + util.inspect(req.authorization));
      next(false);
    }
  } else {
    res.send(500, new Error('No Authorization Key'));
    error('NO AUTHORIZATION');
    next(false);
  }
}
```

---

### Ch08 section 5

**_`Creating a command-line tool to test and administer the user authentication server`_**

```bash section 4
touch cli.mjs
```

#### **users/cli.mjs**

```javascript
import { default as program } from 'commander';
import { default as restify } from 'restify-clients';
import * as util from 'util';

var client_port;
var client_host;
var client_version = '*';
var client_protocol;
var authid = 'them';
var authcode = 'D4ED43C0-8BD6-4FE2-B358-7C0E230D11EF';

const client = (program) => {
  if (typeof process.env.PORT === 'string')
    client_port = Number.parseInt(process.env.PORT);
  if (typeof program.port === 'string')
    client_port = Number.parseInt(program.port);
  if (typeof program.host === 'string') client_host = program.host;
  if (typeof program.url === 'string') {
    let purl = new URL(program.url);
    if (purl.host && purl.host !== '') client_host = purl.host;
    if (purl.port && purl.port !== '') client_port = purl.port;
    if (purl.protocol && purl.protocol !== '') client_protocol = purl.protocol;
  }
  let connect_url = new URL('http://localhost:5858');
  if (client_protocol) connect_url.protocol = client_protocol;
  if (client_host) connect_url.host = client_host;
  if (client_port) connect_url.port = client_port;
  let client = restify.createJsonClient({
    url: connect_url.href,
    version: client_version,
  });
  client.basicAuth(authid, authcode);
  return client;
};

program
  .option(
    '-p, --port <port>',
    'Port number for user server, if using localhost'
  )
  .option(
    '-h, --host <host>',
    'Port number for user server, if using localhost'
  )
  .option(
    '-u, --url <url>',
    'Connection URL for user server, if using a remote server'
  );

program.parse(process.argv);
```

```bash section 5
node cli.mjs --help
```

---

### Ch08 section 6

**_`Creating a user in the user information database`_**

#### **users/user-server.mjs**

```javascript
// ...
// process.on('unhandledRejection', (reason, p) => {
//     console.error(`UNHANDLED PROMISE REJECTION: ${util.inspect(p)} reason: ${reason}`);
//     process.exit(1);
// });

//////////// REST server route handlers

// Create a user record
server.post('/create-user', async (req, res, next) => {
  try {
    await connectDB();
    let result = await createUser(req);
    res.contentType = 'json';
    res.send(result);
    next(false);
  } catch (err) {
    res.send(500, err);
    next(false);
  }
});

// Find a user, if not found create one given profile information
server.post('/find-or-create', async (req, res, next) => {
  try {
    await connectDB();
    let user = await findOneUser(req.params.username);
    if (!user) {
      user = await createUser(req);
      if (!user) throw new Error('No user created');
    }
    res.contentType = 'json';
    res.send(user);
    return next(false);
  } catch (err) {
    res.send(500, err);
    next(false);
  }
});
```

#### **users/cli.mjs**

```javascript
// ...
// ...
// program
//     .option('-p, --port <port>', 'Port number for user server, if using localhost')
//     .option('-h, --host <host>', 'Port number for user server, if using localhost')
//     .option('-u, --url <url>', 'Connection URL for user server, if using a remote server');

program
  .command('add <username>')
  .description('Add a user to the user server')
  .option('--password <password>', 'Password for new user')
  .option(
    '--family-name <familyName>',
    'Family name, or last name, of the user'
  )
  .option('--given-name <givenName>', 'Given name, or first name, of the user')
  .option('--middle-name <middleName>', 'Middle name of the user')
  .option('--email <email>', 'Email address for the user')
  .action((username, cmdObj) => {
    const topost = {
      username,
      password: cmdObj.password,
      provider: 'local',
      familyName: cmdObj.familyName,
      givenName: cmdObj.givenName,
      middleName: cmdObj.middleName,
      emails: [],
      photos: [],
    };
    if (typeof cmdObj.email !== 'undefined') topost.emails.push(cmdObj.email);
    client(program).post('/create-user', topost, (err, req, res, obj) => {
      if (err) console.error(err.stack);
      else console.log('Created ' + util.inspect(obj));
    });
  });

program
  .command('find-or-create <username>')
  .description('Add a user to the user server')
  .option('--password <password>', 'Password for new user')
  .option(
    '--family-name <familyName>',
    'Family name, or last name, of the user'
  )
  .option('--given-name <givenName>', 'Given name, or first name, of the user')
  .option('--middle-name <middleName>', 'Middle name of the user')
  .option('--email <email>', 'Email address for the user')
  .action((username, cmdObj) => {
    const topost = {
      username,
      password: cmdObj.password,
      provider: 'local',
      familyName: cmdObj.familyName,
      givenName: cmdObj.givenName,
      middleName: cmdObj.middleName,
      emails: [],
      photos: [],
    };
    if (typeof cmdObj.email !== 'undefined') topost.emails.push(cmdObj.email);
    client(program).post('/find-or-create', topost, (err, req, res, obj) => {
      if (err) console.error(err.stack);
      else console.log('Found or Created ' + util.inspect(obj));
    });
  });
```

```bash section 6
npm start
```

```bash section 6
node cli.mjs add --password w0rd --family-name Einarrsdottir --given-name Ashildr --email me@stolen.tardis me
node cli.mjs find-or-create --password foooo --family-name Smith --given-name John --middle-name Snuffy --email snuffy@example.com snuffy-smith
```

---

### Ch08 section 7

**_`Reading user data from the user information service`_**

#### **users/user-server.mjs**

```javascript
// Find the user data (does not return password)
server.get('/find/:username', async (req, res, next) => {
  try {
    await connectDB();
    const user = await findOneUser(req.params.username);
    if (!user) {
      res.send(404, new Error('Did not find ' + req.params.username));
    } else {
      res.contentType = 'json';
      res.send(user);
    }
    next(false);
  } catch (err) {
    res.send(500, err);
    next(false);
  }
});

// List users
server.get('/list', async (req, res, next) => {
  try {
    await connectDB();
    let userlist = await SQUser.findAll({});
    userlist = userlist.map((user) => sanitizedUser(user));
    if (!userlist) userlist = [];
    res.contentType = 'json';
    res.send(userlist);
    next(false);
  } catch (err) {
    res.send(500, err);
    next(false);
  }
});
```

#### **users/cli.mjs**

```javascript
// ...
// program
//     .command('find-or-create <username>')
// ...

program
  .command('find <username>')
  .description('Search for a user on the user server')
  .action((username, cmdObj) => {
    client(program).get(`/find/${username}`, (err, req, res, obj) => {
      if (err) console.error(err.stack);
      else console.log('Found ' + util.inspect(obj));
    });
  });

program
  .command('list-users')
  .description('List all users on the user server')
  .action((cmdObj) => {
    client(program).get('/list', (err, req, res, obj) => {
      if (err) console.error(err.stack);
      else console.log(obj);
    });
  });
```

```bash section 7
node cli.mjs find me
node cli.mjs list-users
```

---

### Ch08 section 8

**_`Updating user information in the user information service`_**

#### **users/user-server.mjs**

```javascript
// ...
// Create a user record
// server.post('/create-user', async (req, res, next) => {
// ...
// }

// Update an existing user record
server.post('/update-user/:username', async (req, res, next) => {
  try {
    log(`update-user params ${util.inspect(req.params)}`);
    await connectDB();
    let toupdate = userParams(req);
    log(`updating ${util.inspect(toupdate)}`);
    await SQUser.update(toupdate, { where: { username: req.params.username } });
    const result = await findOneUser(req.params.username);
    log('updated ' + util.inspect(result));
    res.contentType = 'json';
    res.send(result);
    next(false);
  } catch (err) {
    res.send(500, err);
    error(`/update-user/${req.params.username} ${err.stack}`);
    next(false);
  }
});
```

#### **users/cli.mjs**

```javascript
// program
//     .command('find-or-create <username>')
// ...

program
  .command('update <username>')
  .description('Add a user to the user server')
  .option('--password <password>', 'Password for new user')
  .option(
    '--family-name <familyName>',
    'Family name, or last name, of the user'
  )
  .option('--given-name <givenName>', 'Given name, or first name, of the user')
  .option('--middle-name <middleName>', 'Middle name of the user')
  .option('--email <email>', 'Email address for the user')
  .action((username, cmdObj) => {
    const topost = {
      username,
      password: cmdObj.password,
      familyName: cmdObj.familyName,
      givenName: cmdObj.givenName,
      middleName: cmdObj.middleName,
      emails: [],
      photos: [],
    };
    if (typeof cmdObj.email !== 'undefined') topost.emails.push(cmdObj.email);
    client(program).post(
      `/update-user/${username}`,
      topost,
      (err, req, res, obj) => {
        if (err) console.error(err.stack);
        else console.log('Updated ' + util.inspect(obj));
      }
    );
  });
```

```bash section 8
node cli.mjs update --password fooooey --family-name Smith --given-name John --middle-name Snuffy --email snuffy3@gmail.com snuffy-smith
```

---

### Ch08 section 9

**_`Deleting a user record from the user information service`_**

#### **users/user-server.mjs**

```javascript
// Find the user data (does not return password)
// server.get('/find/:username', async (req, res, next) => {
// ...

// Delete/destroy an existing user record
server.del('/destroy/:username', async (req, res, next) => {
  try {
    await connectDB();
    const user = await SQUser.findOne({
      where: { username: req.params.username },
    });
    if (!user) {
      res.send(
        404,
        new Error(`Did not find requested ${req.params.username} to delete`)
      );
    } else {
      user.destroy();
      res.contentType = 'json';
      res.send({});
    }
    next(false);
  } catch (err) {
    res.send(500, err);
    error(`/destroy/${req.params.username} ${err.stack}`);
    next(false);
  }
});
```

#### **users/cli.mjs**

```javascript
// program
//     .command('update <username>')
// ...

program
  .command('destroy <username>')
  .description('Destroy a user on the user server')
  .action((username, cmdObj) => {
    client(program).del(`/destroy/${username}`, (err, req, res, obj) => {
      if (err) console.error(err.stack);
      else console.log('Deleted - result= ' + util.inspect(obj));
    });
  });
```

```bash section 9
node cli.mjs destroy snuffy-smith
node cli.mjs find snuffy-smith
```

---

### Ch08 section 10

**_`Checking the user's password in the user information service`_**

#### **users/user-server.mjs**

```javascript
// Delete/destroy a user record
// server.del('/destroy/:username', async (req, res, next) => {
//   ...

// Check password
server.post('/password-check', async (req, res, next) => {
  try {
    await connectDB();
    const user = await SQUser.findOne({
      where: { username: req.params.username },
    });
    let checked;
    if (!user) {
      checked = {
        check: false,
        username: req.params.username,
        message: 'Could not find user',
      };
    } else if (
      user.username === req.params.username &&
      user.password === req.params.password
    ) {
      checked = { check: true, username: user.username };
    } else {
      checked = {
        check: false,
        username: req.params.username,
        message: 'Incorrect password',
      };
    }
    res.contentType = 'json';
    res.send(checked);
    next(false);
  } catch (err) {
    res.send(500, err);
    next(false);
  }
});
```

#### **users/cli.mjs**

```javascript
// program
//     .command('list-users')
//     ...

program
  .command('password-check <username> <password>')
  .description('Check whether the user password checks out')
  .action((username, password, cmdObj) => {
    client(program).post(
      '/password-check',
      { username, password },
      (err, req, res, obj) => {
        if (err) console.error(err.stack);
        else console.log(obj);
      }
    );
  });
```

```bash section 10
node cli.mjs password-check me w0rd
node cli.mjs password-check me w0rdy
```

---

### Ch08 section 11

**_`Providing login support for the Notes application`_**

```bash section 11
null
```

#### **users/namethisFILE**

```javascript
null;
```

---

### Ch08 section 12

**_`Accessing the user authentication REST API`_**

```bash section 12
npm i superagent@^5.2.x
touch models/users-superagent.mjs
```

#### **models/users-superagent.mjs**

```javascript
import { default as request } from 'superagent';
import util from 'util';
import DBG from 'debug';
const debug = DBG('notes:users-superagent');
const error = DBG('notes:error-superagent');

// import { default as bcrypt } from 'bcrypt';
// const saltRounds = 10;

var authid = 'them';
var authcode = 'D4ED43C0-8BD6-4FE2-B358-7C0E230D11EF';

function reqURL(path) {
  const requrl = new URL(process.env.USER_SERVICE_URL);
  requrl.pathname = path;
  return requrl.toString();
}

// async function hashpass(password) {
//     let salt = await bcrypt.genSalt(saltRounds);
//     let hashed = await bcrypt.hash(password, salt);
//     return hashed;
// }

export async function create(
  username,
  password,
  provider,
  familyName,
  givenName,
  middleName,
  emails,
  photos
) {
  var res = await request
    .post(reqURL('/create-user'))
    .send({
      username,
      password: await hashpass(password),
      provider,
      familyName,
      givenName,
      middleName,
      emails,
      photos,
    })
    .set('Content-Type', 'application/json')
    .set('Acccept', 'application/json')
    .auth(authid, authcode);
  return res.body;
}

export async function update(
  username,
  password,
  provider,
  familyName,
  givenName,
  middleName,
  emails,
  photos
) {
  var res = await request
    .post(reqURL(`/update-user/${username}`))
    .send({
      username,
      password: await hashpass(password),
      provider,
      familyName,
      givenName,
      middleName,
      emails,
      photos,
    })
    .set('Content-Type', 'application/json')
    .set('Acccept', 'application/json')
    .auth(authid, authcode);
  return res.body;
}

export async function find(username) {
  var res = await request
    .get(reqURL(`/find/${username}`))
    .set('Content-Type', 'application/json')
    .set('Acccept', 'application/json')
    .auth(authid, authcode);
  return res.body;
}

export async function userPasswordCheck(username, password) {
  var res = await request
    .post(reqURL(`/password-check`))
    .send({ username, password })
    .set('Content-Type', 'application/json')
    .set('Acccept', 'application/json')
    .auth(authid, authcode);
  return res.body;
}

export async function findOrCreate(profile) {
  var res = await request
    .post(reqURL('/find-or-create'))
    .send({
      username: profile.id,
      password: await hashpass(profile.password),
      provider: profile.provider,
      familyName: profile.familyName,
      givenName: profile.givenName,
      middleName: profile.middleName,
      emails: profile.emails,
      photos: profile.photos,
    })
    .set('Content-Type', 'application/json')
    .set('Acccept', 'application/json')
    .auth(authid, authcode);
  return res.body;
}

export async function listUsers() {
  var res = await request
    .get(reqURL('/list'))
    .set('Content-Type', 'application/json')
    .set('Acccept', 'application/json')
    .auth(authid, authcode);
  return res.body;
}
```

---

### Ch08 section 13

**_`Incorporating login and logout routing functions in the Notes application`_**

```bash section 13
npm i passport@^0.4.x passport-local@1.x
npm i express-session@1.17.x session-file-store@1.4.x
touch routes/users.mjs
```

#### **users/routes/users.mjs**

```javascript
import path from 'path';
import util from 'util';
import { default as express } from 'express';
import { default as passport } from 'passport';
import { default as passportLocal } from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import * as usersModel from '../models/users-superagent.mjs';
import { sessionCookieName } from '../app.mjs';

export const router = express.Router();

import DBG from 'debug';
const debug = DBG('notez:router-users');
const error = DBG('notez:error-users');

export function initPassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());
}

export function ensureAuthenticated(req, res, next) {
  try {
    // req.user is set by Passport in the deserialize function
    if (req.user) next();
    else res.redirect('/users/login');
  } catch (e) {
    next(e);
  }
}

router.get('/login', function (req, res, next) {
  try {
    res.render('login', { title: 'Login to Notes', user: req.user });
  } catch (e) {
    next(e);
  }
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/', // SUCCESS: Go to home page
    failureRedirect: 'login', // FAIL: Go to /user/login
  })
);

router.get('/logout', function (req, res, next) {
  try {
    req.session.destroy();
    req.logout();
    res.clearCookie(sessionCookieName);
    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      var check = await usersModel.userPasswordCheck(username, password);
      if (check.check) {
        done(null, { id: check.username, username: check.username });
      } else {
        done(null, false, check.message);
      }
    } catch (e) {
      done(e);
    }
  })
);

passport.serializeUser(function (user, done) {
  try {
    done(null, user.username);
  } catch (e) {
    done(e);
  }
});

passport.deserializeUser(async (username, done) => {
  try {
    var user = await usersModel.find(username);
    done(null, user);
  } catch (e) {
    done(e);
  }
});
```

---

### Ch08 section 14

**_`Login/logout changes to app.mjs`_**

```bash section 14
# npm i memorystore
```

#### **notez/app.mjs**

```javascript
// import { router as indexRouter } from './routes/index.mjs';
// import { router as notesRouter } from './routes/notes.mjs';
import { router as usersRouter, initPassport } from './routes/users.mjs';

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

// ...
// app.use(cookieParser());
app.use(
  session({
    // Use the appropriate session store class
    // store: new MemoryStore({}),
    // store: new LokiStore({}),
    store: new FileStore({ path: 'sessions' }),
    secret: 'keyboard mouse',
    resave: true,
    saveUninitialized: true,
    name: sessionCookieName,
  })
);
initPassport(app);

// ...
// app.use('/', indexRouter);
// app.use('/notes', notesRouter);
app.use('/users', usersRouter);
```

---

### Ch08 section 15

**_`Login/logout changes in routes/index.mjs`_**

```bash section 15
null
```

#### **notez/routes/index.mjs**

```javascript
// ...
user: req.user ? req.user : undefined;
// ...
```

---

### Ch08 section 16

**_`Login/logout changes required in routes/notes.mjs`_**

```bash section 16
null
```

#### **notez/routes/notes.mjs**

```javascript
import { ensureAuthenticated } from './users.mjs';
// ...
// Modify the /add route handler
router.get('/add', ensureAuthenticated, (req, res, next) => {
    try {
        res.render('noteedit', {
            title: "Add a Note",
            docreate: true, notekey: "",
            user: req.user, note: undefined
        });
    } catch (e) { next(e); }
});
// ...
// Modify the /save route handler
router.post('/save', ensureAuthenticated, (req, res, next) => {
  ..
});
// ...
// Modify the /view route handler
// ...
user: req.user ? req.user : undefined,
// ...
// Modify the /edit and /destroy route handlers,
router.get('/edit', ensureAuthenticated, (req, res, next) => {
    try {
        var note = await notes.read(req.query.key);
        res.render('noteedit', {
            title: note ? ("Edit " + note.title) : "Add a Note",
            docreate: false,
            notekey: req.query.key,
            user: req.user,
            note: note
        });
    } catch (e) { next(e); }
});
router.get('/destroy', ensureAuthenticated, (req, res, next) => {
    try {
        var note = await notes.read(req.query.key);
        res.render('notedestroy', {
            title: note ? `Delete ${note.title}` : "",
            notekey: req.query.key,
            user: req.user,
            note: note
        });
    } catch (e) { next(e); }
});
router.post('/destroy/confirm', ensureAuthenticated, (req, res, next) => {
  ..
});
```

---

### Ch08 section 17

**_`Viewing template changes supporting login/logout`_**

```bash section 17
null
```

#### **notez/partials/header.hbs**

```hbs
<!-- ... -->
<!-- make the following additions -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href='/'><i data-feather="home"></i></a>
  <button class="navbar-toggler" type="button"
         data-toggle="collapse" data-target="#navbarLogIn"
         aria-controls="navbarLogIn"
         aria-expanded="false"
         aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
  </button>
  {{#if user}}
  <div class="collapse navbar-collapse" id="navbarLogIn">
     <span class="navbar-text text-dark col">{{ title }}</span>
     <a class="btn btn-dark col-auto" href="/users/logout">
            Log Out <span class="badge badge-light">{{ user.username
                }}
     </span></a>
     <a class="nav-item nav-link btn btn-dark col-auto"
         href='/notes/add'>ADD Note</a>
  </div>
  {{else}}
  <div class="collapse navbar-collapse" id="navbarLogIn">
     <a class="btn btn-primary" href="/users/login">Log in</a>
  </div>
  {{/if}}
</nav>
<!-- ... -->
```

#### **notez/views/login.hbs**

```hbs
<div class="container-fluid">
  <div class="row">
    <div class="col-12 btn-group-vertical" role="group">

        <form method='POST' action='/users/login'>
        <div class="form-group">
        <label for="username">User name:</label>
        <input class="form-control" type='text' id='username'
               name='username' value='' placeholder='User Name'/>
        </div>
        <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type='password' id='password'
               name='password' value='' placeholder='Password'/>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        </form>

    </div>
  </div>
</div>
```

#### **notez/views/notedestroy.hbs**

```hbs
<form method='POST' action='/notes/destroy/confirm'>
<div class="container-fluid">
  {{#if user}}
  <input type='hidden' name='notekey' value='{{#if
    note}}{{notekey}}{{/if}}'>
 <p class="form-text">Delete {{note.title}}?</p>

 <div class="btn-group">
 <button type="submit" value='DELETE'
 class="btn btn-outline-dark">DELETE</button>
 <a class="btn btn-outline-dark"
 href="/notes/view?key={{#if note}}{{notekey}}{{/if}}"
 role="button">Cancel</a>
 </div>
 {{else}}
 {{> not-logged-in }}
 {{/if}}
</div>
</form>
```

#### **notez/partials/not-logged-in.hbs**

```hbs
<div class="jumbotron">
 <h1>Not Logged In</h1>
 <p>You are required to be logged in for this action, but you are not.
 You should not see this message. It's a bug if this message appears.
 </p>
 <p><a class="btn btn-primary" href="/users/login">Log in</a></p>
</div>
```

#### **notez/views/noteedit.hbs**

```hbs
..
<div class="container-fluid">
{{#if user}}
..
{{else}}
{{> not-logged-in }}
{{/if}}
</div>
..
```

---

### Ch08 section 18

**_`Running the Notes application with user authentication`_**

#### **notez/package.json**

```json
{
  "scripts": {
    "start": "cross-env DEBUG=notes:* SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=sequelize USER_SERVICE_URL=http://localhost:5858 node ./app.mjs"
    // ...
  }
}
```

```bash section 18
cd users
npm start
```

```bash section 18
cd notes
DEBUG=notez:* npm start
```

---

### Ch08 section 19

**_`Providing Twitter login support for the Notes application`_**

```bash section 19
null
```

#### **users/namethisFILE**

```javascript
null;
```

---

### Ch08 section 20

**_`Registering an application with Twitter`_**

[https://developer.twitter.com/en/apps](https://developer.twitter.com/en/apps 'register an app with Twitter')
[https://developer.twitter.com/en/docs/basics/authentication/guides/authentication-best-practices](https://developer.twitter.com/en/docs/basics/authentication/guides/authentication-best-practices 'best practices for storing Twitter tokens')

```bash section 20
null
```

```javascript
null;
```

---

### Ch08 section 21

**_`Storing authentication tokens`_**

```bash section 21
npm i dotenv@8.2.x
```

#### **notez/app.mjs**

```javascript
import dotenv from 'dotenv/config.js';
```

#### **notez/.env**

```t
VARIABLE1=value for variable 1
VARIABLE2=value for variable 2
```

#### **notez/.gitignore**

```.gitignore
notes-fs-data
notes.level
chap07.sqlite3
notes-sequelize.sqlite3
package-lock.json
data
node_modules
.env
```

---

### Ch08 section 22

**_`Implementing TwitterStrategy`_**

```bash section 22
npm i passport-twitter@1.x
```

#### **notez/routes/users.mjs**

```javascript
// ...
import passportTwitter from 'passport-twitter';
const TwitterStrategy = passportTwitter.Strategy;
// ...

const twittercallback = process.env.TWITTER_CALLBACK_HOST
  ? process.env.TWITTER_CALLBACK_HOST
  : 'http://localhost:3000';
export var twitterLogin;

if (
  typeof process.env.TWITTER_CONSUMER_KEY !== 'undefined' &&
  process.env.TWITTER_CONSUMER_KEY !== '' &&
  typeof process.env.TWITTER_CONSUMER_SECRET !== 'undefined' &&
  process.env.TWITTER_CONSUMER_SECRET !== ''
) {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: `${twittercallback}/users/auth/twitter/callback`,
      },
      async function (token, tokenSecret, profile, done) {
        try {
          done(
            null,
            await usersModel.findOrCreate({
              id: profile.username,
              username: profile.username,
              password: '',
              provider: profile.provider,
              familyName: profile.displayName,
              givenName: '',
              middleName: '',
              photos: profile.photos,
              emails: profile.emails,
            })
          );
        } catch (err) {
          done(err);
        }
      }
    )
  );

  twitterLogin = true;
} else {
  twitterLogin = false;
}

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })
);
```

#### **notez/partials/header.hbs**

```javascript
// ...
{{else}}
<div class="collapse navbar-collapse" id="navbarLogIn">
    <span class="navbar-text text-dark col"></span>
    <a class="nav-item nav-link btn btn-dark col-auto" href="/users/login">
                                Log in</a>
    {{#if twitterLogin}}
    <a class="nav-item nav-link btn btn-dark col-auto"
       href="/users/auth/twitter">
    <img width="15px"
    src="/assets/vendor/twitter/Twitter_SocialIcon
       _Rounded_Square_Color.png"/>
         Log in with Twitter</a>
    {{/if}}
</div>
{{/if}}
```

[https://about.twitter.com/company/brand-assets.](https://about.twitter.com/company/brand-assets 'Twitter Assets')

#### **notez/routes/index.mjs**

```javascript
// ...
import { twitterLogin } from './users.mjs';
// ...
// router.get('/', async (req, res, next) => {
    // ...
        // res.render('index', {
            // title: 'Notes', notelist: notelist,
            // user: req.user ? req.user : undefined,
            twitterLogin: twitterLogin
        // });
    // ...
});
```

#### **notez/routes/notes.mjs**

```javascript
// ...
import { twitterLogin } from './users.mjs';
// ...
// router.get('/add', ensureAuthenticated, (req, res, next) => {
    // res.render('noteedit', {
        ... twitterLogin: twitterLogin, ...
    // });
// });

// router.get('/view', (req, res, next) => {
    // res.render('noteview', {
        ... twitterLogin: twitterLogin, ...
    // });
// });

// router.get('/edit', ensureAuthenticated, (req, res, next) => {
    // res.render('noteedit', {
        ... twitterLogin: twitterLogin, ...
    // });
// });

// router.get('/destroy', ensureAuthenticated, (req, res, next) => {
    // res.render('notedestroy', {
        ... twitterLogin: twitterLogin, ...
    // });
// });
```

```bash section 22
npm start
```

#### **notez/package.json**

```json
{
  "scripts": {
    "start": "cross-env DEBUG=notes:* SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=models/notes-sequelize USERS_MODEL=models/users-rest USER_SERVICE_URL=http://localhost:5858 node ./bin/www",
    "start-server1": "SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=models/notes-sequelize USERS_MODEL=models/users-rest USER_SERVICE_URL=http://localhost:5858 PORT=3000 node ./bin/www",
    "start-server2": "SEQUELIZE_CONNECT=models/sequelize-sqlite.yaml NOTES_MODEL=models/notes-sequelize USERS_MODEL=models/users-rest USER_SERVICE_URL=http://localhost:5858 PORT=3002 node ./bin/www"
    // "dl-slate": "mkdir -p slate && npm run dl-slate-css && npm run dl-slate-min-css",
    // "dl-slate-css": "wget https://bootswatch.com/4/slate/bootstrap.css -O slate/bootstrap.css",
    // "dl-slate-min-css": "wget https://bootswatch.com/4/slate/bootstrap.min.css -O slate/bootstrap.min.css"
  }
}
```

```bash section 22
npm run start-server1
```

```bash section 22
npm run start-server2
```

```bash section 22
ls -l sessions/
```

---

### Ch08 section 23

**_`Keeping secrets and passwords secure`_**

```bash section 23
npm i bcrypt@5.x
```

```javascript
null;
```

---

### Ch08 section 24

**_`Adding password encryption to the user information service`_**

#### **users/cli.mjs**

```javascript
import { default as bcrypt } from 'bcrypt';
const saltRounds = 10;
// ...
async function hashpass(password) {
 let salt = await bcrypt.genSalt(saltRounds);
 let hashed = await bcrypt.hash(password, salt);
 return hashed;
}
// ...
// x3 (add, find-or-create, and update)
.action(async (username, cmdObj) => {
  // const topost = {
    // username,
    password: await hashpass(cmdObj.password),
    // ...
  // };
  // ...
 })
```

#### **notez/user-server.mjs**

```javascript
import { default as bcrypt } from 'bcrypt';
// ...
server.post('/password-check', async (req, res, next) => {
  try {
    const user = await SQUser.findOne({
                     where: { username: req.params.username } });
    let checked;
    if (!user) {
      checked = {
        check: false, username: req.params.username,
        message: "Could not find user"
      };
    } else {
      let pwcheck = false;
      if (user.username === req.params.username) {
        pwcheck = await bcrypt.compare(req.params.password,
         user.password);
      }
      if (pwcheck) {
        checked = { check: true, username: user.username };
      } else {
        checked = {
          check: false, username: req.params.username,
          message: "Incorrect username or password"
        };
      }
    }
    // ...
  } catch (e) { .. }
});
```

```bash section 24
npm start
```

```bash section 24
node cli.mjs add --password w0rd --family-name Einarsdottir --given-name Ashildr --email me@stolen.tardis me
sqlite3 users-sequelize.sqlite3
sqlite> select * from SQUsers;
sqlite> ^D
node cli.mjs password-check me w0rd
node cli.mjs password-check me w0rdy
```

---

### Ch08 section 25

**_`Implementing encrypted password support in the Notes application`_**

```bash section 25
code sample
code sample
code sample
```

#### **users/users-superagent.mjs**

```javascript
import { default as bcrypt } from 'bcrypt';
const saltRounds = 10;

async function hashpass(password) {
  let salt = await bcrypt.genSalt(saltRounds);
  let hashed = await bcrypt.hash(password, salt);
  return hashed;
}
// ...
// x3 (create, find-or-create, and update)
// export async function create(username, password,
        //  provider, familyName, givenName, middleName, emails, photos) {
//  var res = await request.post(reqURL('/create-user')).send({
    username, password: await hashpass(password), provider,
    // familyName, givenName, middleName, emails, photos
//  })
//  ...
}
```

---

### Ch08 section 26

**_`Running the Notes application stack`_**

```bash section 26
null
```

#### **users/namethisFILE**

```javascript
null;
```

---

### Ch08 section 27

**_`Summary`_**

```bash section 27
null
```

#### **users/namethisFILE**

```javascript
null;
```

---

---

## Chapter 09

---

---

### Ch09 section 1

**_`Dynamic Client/Server Interaction with Socket.IO`_**

```bash section 1
null
```

```javascript
null;
```

---

### Ch09 section 2

**_`Introducing Socket.IO`_**

```bash section 2
null
```

```javascript
null;
```

---

### Ch09 section 3

**_`Initializing Socket.IO with Express`_**

```bash section 3
npm i socket.io@2.x passport.socketio@3.7.x
```

#### **notez/app.mjs**

```javascript
import socketio from 'socket.io';
import passportSocketIo from 'passport.socketio';
// ...
// import session from 'express-session';
// import sessi/onFileStore from 'session-file-store';
// const FileStore = sessionFileStore(session);
// export const sessionCookieName = 'notescookie.sid';
const sessionSecret = 'keyboard mouse';
const sessionStore = new FileStore({ path: 'sessions' });
// ...
// export const app = express();

// export const port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// export const server = http.createServer(app);

// server.listen(port);
// server.on('request', (req, res) => {
//     debug(`${new Date().toISOString()} request ${req.method} ${req.url}`);
// });
// server.on('error', onError);
// server.on('listening', onListening);

export const io = socketio(server);

io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: sessionCookieName,
    secret: sessionSecret,
    store: sessionStore,
  })
);
// ...
app.use(
  session({
    store: sessionStore,
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    name: sessionCookieName,
  })
);
initPassport(app);
```

---

### Ch09 section 4

**_`Real-time updates on the Notes homepage`_**

```bash section 4
null
```

```javascript
null;
```

---

### Ch09 section 5

**_`Refactoring the NotesStore classes to emit events`_**

```bash section 5
null
```

#### **notez/models/Notes.mjs**

```javascript
import EventEmitter from 'events';

// export class AbstractNotesStore extends EventEmitter {
//  static store() { }
//  async close() { }
//  async update(key, title, body) { }
//  async create(key, title, body) { }
//  async read(key) { }
//  async destroy(key) { }
//  async keylist() { }
//  async count() { }

 emitCreated(note) { this.emit('notecreated', note); }
 emitUpdated(note) { this.emit('noteupdated', note); }
 emitDestroyed(key) { this.emit('notedestroyed', key); }
}
```

#### **notez/models/notes-sequelize.mjs**

```javascript
// async update(key, title, body) {
// ...
//  const note = await this.read(key);
this.emitUpdated(note);
//  return note;
// ...
// }
// async create(key, title, body) {
// ...
//  const note = new Note(sqnote.notekey, sqnote.title, sqnote.body);
this.emitCreated(note);
//  return note;
// }

// async destroy(key) {
//  ...
this.emitDestroyed(key);
// }
```

#### **notez/routes/index.mjs and notez/routes/notes.mjs**

```javascript
export function init() {}
```

#### **notez/app.mjs**

```javascript
import { router as indexRouter, init as homeInit } from './routes/index.mjs';
import { router as notesRouter, init as notesInit } from './routes/notes.mjs';

// ...
// import { useModel as useNotesModel } from './models/notes-store.mjs';
// useNotesModel(process.env.NOTES_MODEL)
// .then(store => {
homeInit();
notesInit();
// })
// .catch(error => { onError({ code: 'ENOTESSTORE', error }); });
```

---

### Ch09 section 6

**_`Real-time changes in the Notes home page`_**

```bash section 6
null
```

#### **notez/routes/index.mjs**

```javascript
import { io } from '../app.mjs';
// ...
router.get('/', async (req, res, next) => {
  try {
    const notelist = await getKeyTitlesList();
    res.render('index', {
      title: 'Notes',
      notelist: notelist,
      user: req.user ? req.user : undefined,
    });
  } catch (e) {
    next(e);
  }
});

async function getKeyTitlesList() {
  const keylist = await notes.keylist();
  const keyPromises = keylist.map((key) => notes.read(key));
  const notelist = await Promise.all(keyPromises);
  return notelist.map((note) => {
    return { key: note.key, title: note.title };
  });
}

const emitNoteTitles = async () => {
  const notelist = await getKeyTitlesList();
  io.of('/home').emit('notetitles', { notelist });
};

export function init() {
  io.of('/home').on('connect', (socket) => {
    debug('socketio connection on /home');
  });
  notes.on('notecreated', emitNoteTitles);
  notes.on('noteupdate', emitNoteTitles);
  notes.on('notedestroy', emitNoteTitles);
}
```

---

### Ch09 section 7

**_`Changing the home page and layout templates`_**

```bash section 7
null
```

#### **notez/partials/footerjs.hbs**

```hbs
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="/assets/vendor/jquery/jquery.min.js"></script>
<script src="/assets/vendor/popper.js/popper.min.js"></script>
<script src="/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="/assets/vendor/feather-icons/feather.js"></script>
<script>
 feather.replace();
</script>
```

#### **notez/views/layout.hbs**

```hbs
<!-- <html> -->
<!-- <head>...</head> -->
<!-- <body> -->
    {{> header }}
    {{{body}}}
<!-- </body> -->
<!-- </html> -->
```

#### **notez/views.. (error.hbs, index.hbs, login.hbs, notedestroy.hbs, noteedit.hbs, and noteview.hbs)**

```hbs
{{> footerjs}}
```

---

### Ch09 section 8

**_`Adding a Socket.IO client to the Notes home page`_**

```bash section 8
null
```

#### **notez/views/index.hbs**

```hbs
<div class="col-12 btn-group-vertical" id="notetitles" role="group">
<!-- ... -->
</div>
<!-- {{> footerjs}} -->

<script src="/socket.io/socket.io.js"></script>
<script>
$(document).ready(function () {
  var socket = io('/home');
  socket.on('connect', socket => {
      console.log('socketio connection on /home');
  });
  socket.on('notetitles', function(data) {
    var notelist = data.notelist;
    $('#notetitles').empty();
    for (var i = 0; i < notelist.length; i++) {
      notedata = notelist[i];
      $('#notetitles')
      .append('<a class="btn btn-lg btn-block btn-outline-dark"
       href="/notes/view?key='+ notedata.key +'">'+
        notedata.title +'</a>');
    }
  });
});
</script>
```

---

### Ch09 section 9

**_`Running Notes with real-time home page updates`_**

```bash section 9
cd users
npm start
```

```bash section 9
cd notez
npm start
```

```javascript
null;
```

---

### Ch09 section 10

**_`A word on enabling debug tracing in Socket.IO code`_**

#### **notez/namethisFILE**

```javascript
DEBUG=notes:*,socket.io:*
```

```javascript section 10
localStorage.debug = 'socket.io-client:*,socket.io-parser';
```

---

### Ch09 section 11

**_`Real-time action while viewing notes`_**

```bash section 11
null
```

#### **notez/routes/notes.mjs**

```javascript
import { emitNoteTitles } from './index.mjs';
import { io } from '../app.mjs';
```

#### **notez/routes/index.mjs**

```javascript
export const emitNoteTitles = async () => { ... };

export function init() {
    io.of('/notes').on('connect', socket => {
        if (socket.handshake.query.key) {
            socket.join(socket.handshake.query.key);
        }
    });
    notes.on('noteupdated', note => {
        const toemit = {
            key: note.key, title: note.title, body: note.body
        };
        io.of('/notes').to(note.key).emit('noteupdated', toemit);
        emitNoteTitles();
    });
    notes.on('notedestroyed', key => {
        io.of('/notes').to(key).emit('notedestroyed', key);
        emitNoteTitles();
    });
}
```

#### **notez/ ..noteupdated and notedestroyed**

```javascript
io.of('/namespace').to(roomName).emit(..);
```

---

### Ch09 section 12

**_`Changing the note view template for real-time action`_**

```bash section 12
null
```

#### **notez/noteview.hbs**

```hbs
<script src="/socket.io/socket.io.js"></script>
<script>
$(document).ready(function () {
    let socket = io('/notes', {
        query: { key: '{{ notekey }}' }
    });
    socket.on('noteupdated', note => {
        $('h3#notetitle').empty();
        $('h3#notetitle').text(note.title);
        $('#navbartitle').empty();
        $('#navbartitle').text(note.title);
        $('#notebody').empty();
        $('#notebody').text(note.body);
    });
    socket.on('notedestroyed', key => {
        window.location.href = "/";
    });
});
</script>
{{/if}}
```

#### **notez/partials/header.hbs**

```hbs
<span id="navbartitle" class="navbar-text text-dark col">{{ title }}</span id="navbartitle">
```

---

### Ch09 section 13

**_`Running Notes with pseudo-real-time updates while viewing a note`_**

```bash section 13
null
```

```javascript
null;
```

---

### Ch09 section 14

**_`Inter-user chat and commenting for Notes`_**

```bash section 14
null
```

```javascript
null;
```

---

### Ch09 section 15

**_`Data model for storing messages`_**

```bash section 15
null
```

#### **notez/models/messages-sequelize.mjs**

```javascript
import Sequelize from 'sequelize';
import { connectDB as connectSequlz, close as closeSequlz } from './sequlz.mjs';

import EventEmitter from 'events';
class MessagesEmitter extends EventEmitter {}
export const emitter = new MessagesEmitter();

import DBG from 'debug';
const debug = DBG('notes:model-messages');
const error = DBG('notes:error-messages');

let sequelize;
export class SQMessage extends Sequelize.Model {}

async function connectDB() {
  if (sequelize) return;
  sequelize = await connectSequlz();

  SQMessage.init(
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      from: Sequelize.STRING,
      namespace: Sequelize.STRING,
      room: Sequelize.STRING,
      message: Sequelize.STRING(1024),
      timestamp: Sequelize.DATE,
    },
    {
      hooks: {
        afterCreate: (message, options) => {
          const toEmit = sanitizedMessage(message);
          emitter.emit('newmessage', toEmit);
        },
        afterDestroy: (message, options) => {
          emitter.emit('destroymessage', {
            id: message.id,
            namespace: message.namespace,
            room: message.room,
          });
        },
      },
      sequelize,
      modelName: 'SQMessage',
    }
  );
  await SQMessage.sync();
}

function sanitizedMessage(msg) {
  return {
    id: msg.id,
    from: msg.from,
    namespace: msg.namespace,
    room: msg.room,
    message: msg.message,
    timestamp: msg.timestamp,
  };
}

export async function postMessage(from, namespace, room, message) {
  await connectDB();
  const newmsg = await SQMessage.create({
    from,
    namespace,
    room,
    message,
    timestamp: new Date(),
  });
}

export async function destroyMessage(id) {
  await connectDB();
  const msg = await SQMessage.findOne({ where: { id } });
  if (msg) {
    msg.destroy();
  }
}

export async function recentMessages(namespace, room) {
  await connectDB();
  const messages = await SQMessage.findAll({
    where: { namespace, room },
    order: [['timestamp', 'DESC']],
    limit: 20,
  });
  const msgs = messages.map((message) => {
    return sanitizedMessage(message);
  });
  return msgs && msgs.length >= 1 ? msgs : undefined;
}
```

---

### Ch09 section 16

**_`Adding support for messages to the Notes router`_**

```bash section 16
null
```

#### **notez/routes/notes.mjs**

```javascript
import {
  postMessage,
  destroyMessage,
  recentMessages,
  emitter as msgEvents,
} from '../models/messages-sequelize.mjs';

import DBG from 'debug';
const debug = DBG('notes:home');
const error = DBG('notes:error-home');
// ...
msgEvents.on('newmessage', (newmsg) => {
  io.of(newmsg.namespace).to(newmsg.room).emit('newmessage', newmsg);
});
msgEvents.on('destroymessage', (data) => {
  io.of(data.namespace).to(data.room).emit('destroymessage', data);
});
// ...
// io.of('/notes').on('connect', async (socket) => {
//     let notekey = socket.handshake.query.key;
//     if (notekey) {
//         socket.join(notekey);

socket.on('create-message', async (newmsg, fn) => {
  try {
    await postMessage(
      newmsg.from,
      newmsg.namespace,
      newmsg.room,
      newmsg.message
    );
    fn('ok');
  } catch (err) {
    error(`FAIL to create message ${err.stack}`);
  }
});

socket.on('delete-message', async (data) => {
  try {
    await destroyMessage(data.id);
  } catch (err) {
    error(`FAIL to delete message ${err.stack}`);
  }
});
//     }
// });
```

---

### Ch09 section 17

**_`Changing the note view template for messages`_**

```bash section 17
null
```

```javascript
null;
```

---

### Ch09 section 18

**_`Composing messages on the Note view page`_**

```bash section 18
null
```

#### **notez/views/noteview.hbs**

```hbs
<!-- <div class="container-fluid">
    <div class="row"><div class="col-xs-12">
        {{#if note}}<h3 id="notetitle">{{ note.title }}</h3>{{/if}}
        {{#if note}}<div id="notebody">{{ note.body }}</div>{{/if}}
        <p>Key: {{ notekey }}</p>
    </div></div>
    {{#if user }}
    {{#if notekey }}
        <div class="row"><div class="col-xs-12">
        <div class="btn-group">
            <a class="btn btn-outline-dark"
                href="/notes/destroy?key={{notekey}}"
                role="button">Delete</a>
            <a class="btn btn-outline-dark"
                href="/notes/edit?key={{notekey}}"
                role="button">Edit</a> -->
            <button type="button" class="btn btn-outline-dark"
                data-toggle="modal"
                data-target="#notes-comment-modal">Comment</button>
        <!-- </div>
        </div></div> -->

        <!-- <div id="noteMessages">
        {{#if messages}}
            {{#each messages}}
            <div id="note-message-{{ id }}" class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ from }}</h5>
                    <div class="card-text">{{ message }}
                        <small style="display: block">{{ timestamp }}</small>
                    </div>
                    <button type="button" class="btn btn-primary message-del-button"
                        data-id="{{ id }}"
                        data-namespace="{{ namespace }}"
                        data-room="{{ room }}">
                        Delete
                    </button>
                </div>
            </div>
            {{/each}}
        {{/if}}
        </div>
    {{/if}}
    {{/if}}
</div> -->

{{#if notekey}}{{#if user}}
<div class="modal fade" id="notes-comment-modal" tabindex="-1"
        role="dialog" aria-labelledby="noteCommentModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title" id="noteCommentModalLabel">Leave a Comment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
            <form id="submit-comment">
            <input id="comment-from" type="hidden" name="from"
                    value="{{ user.id }}">
            <input id="comment-namespace" type="hidden" name="namespace"
                    value="/notes">
            <input id="comment-room" type="hidden" name="room" value="{{notekey}}">
            <input id="comment-key" type="hidden" name="key"
                    value="{{notekey}}">
            <fieldset>
            <div class="form-group">
                <label for="noteCommentTextArea">
                    Your Excellent Thoughts, Please</label>
                <textarea id="noteCommentTextArea" name="message"
                        class="form-control" rows="3"></textarea>
            </div>

            <div class="form-group">
                    <button id="submitNewComment" type="submit" class="btn btn-primary col-sm-offset-2 col-sm-10">
                        Make Comment</button>
            </div>
            </fieldset>
            </form>
      </div>
    </div>
  </div>
</div>
{{/if}}{{/if}}

<!-- {{> footerjs}} -->

<!-- {{#if notekey}} -->
<!-- <script src="/socket.io/socket.io.js"></script> -->
 <script>
// $(document).ready(function () {
// ...
{{#if user}}
    $('#submitNewComment').on('click', function(event) {
        socket.emit('create-message', {
            from: $('#comment-from').val(),
            namespace: $('#comment-namespace').val(),
            room: $('#comment-room').val(),
            key: $('#comment-key').val(),
            message: $('#noteCommentTextArea').val()
        },
        response => {
            $('#notes-comment-modal').modal('hide');
            $('#noteCommentTextArea').empty();
        });
    });

// ...

    // socket.on('destroymessage', data => {
    //     console.log('destroymessage', data);
    //     $('#note-message-'+data.id).remove();
    // });
{{/if}}
// });
// </script>
// {{/if}}
```

---

### Ch09 section 19

**_`Showing any existing messages on the Note view page`_**

```bash section 19
null
```

#### **notez/routes/notes.mjs**

```javascript
// ...
// Read Note (read)
// router.get('/view', async (req, res, next) => {
//     try {
//         const note = await notes.read(req.query.key);
        const messages = await recentMessages('/notes', req.query.key);
        // res.render('noteview', {
        //     title: note ? note.title : "",
        //     notekey: req.query.key,
        //     user: req.user ? req.user : undefined,
        //     twitterLogin: twitterLogin,
            note, messages
        });
    } catch (err) { error(err);  next(err); }
});

```

#### **notez/view/noteview.hbs**

```hbs
<!-- ... -->
        <div id="noteMessages">
        {{#if messages}}
            {{#each messages}}
            <div id="note-message-{{ id }}" class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ from }}</h5>
                    <div class="card-text">{{ message }}
                        <small style="display: block">{{ timestamp }}</small>
                    </div>
                    <button type="button" class="btn btn-primary message-del-button"
                        data-id="{{ id }}"
                        data-namespace="{{ namespace }}"
                        data-room="{{ room }}">
                        Delete
                    </button>
                </div>
            </div>
            {{/each}}
        {{/if}}
        </div>
    <!-- {{/if}}
    {{/if}}
</div>

...

{{> footerjs}}

{{#if notekey}}
<script src="/socket.io/socket.io.js"></script> -->
<script>
$(document).ready(function () { -->
//     let socket = io('/notes', {
// ...
//         });
//     });

    socket.on('newmessage', newmsg => {
        console.log('newmessage', newmsg);
        var msgtxt = [
        '<div id="note-message-%id%" class="card">',
            '<div class="card-body">',
                '<h5 class="card-title">%from%</h5>',
                '<div class="card-text">%message%',
                    '<small style="display: block">%timestamp%</small>',
                '</div>',
                '<button type="button" class="btn btn-primary message-del-button" ',
                    'data-id="%id%" ',
                    'data-namespace="%namespace%" ',
                    'data-room="%room%">',
                    'Delete',
                '</button>',
            '</div>',
        '</div>'
        ].join('\n')
        .replace(/%id%/g, newmsg.id)
        .replace(/%from%/g, newmsg.from)
        .replace(/%namespace%/g, newmsg.namespace)
        .replace(/%room%/g, newmsg.room)
        .replace(/%message%/g, newmsg.message)
        .replace(/%timestamp%/g, newmsg.timestamp);
        console.log(msgtxt);
        $('#noteMessages').prepend(msgtxt);
    });

// ...
```

---

### Ch09 section 20

**_`Deleting messages on the Notes view page`_**

```bash section 20
null
```

#### **notez/view/noteview.hbs**

```hbs
<!-- ... -->
$('button.message-del-button').on('click', function(event) {
  socket.emit('delete-message', {
    id: $(event.target).data('id'),
    namespace: $(event.target).data('namespace'),
    room: $(event.target).data('room')
  })
});

    socket.on('destroymessage', data => {
        console.log('destroymessage', data);
        $('#note-message-'+data.id).remove();
    });
<!-- {{/if}} -->
<!-- }); -->
<!-- </script> -->
<!-- {{/if}} -->
```

---

### Ch09 section 21

**_`Running Notes and passing messages`_**

```bash section 21
npm start
```

```bash section 21
npm start
```

```javascript
null;
```

---

### Ch09 section 22

**_`Summary`_**

```bash section 22
null
```

```javascript
null;
```

---

---

## Chapter 10

---

---

### Ch10 section 1

**_`Deploying Node.js Applications to Linux Servers`_**

```bash section 1
null
```

```javascript
null;
```

---

### Ch10 section 2

**_`Notes application architecture and deployment considerations`_**

```bash section 2
null
```

```javascript
null;
```

---

### Ch10 section 3

**_`Traditional Linux deployment for Node.js services`_**

```bash section 3
null
```

```javascript
null;
```

---

### Ch10 section 4

**_`Installing Multipass`_**

```bash section 4
sudo snap install multipass
multipass launch
multipass list
multipass exec precious-snail -- lsb_release -a
multipass shell precious-snail
multipass exec precious-snail -- sudo apt-get update
multipass exec precious-snail -- sudo apt-get upgrade
multipass list
multipass delete precious-snail
multipass list
multipass purge
multipass list
```

```javascript
null;
```

---

### Ch10 section 5

**_`Handling a failure to launch Multipass instances on Windows`_**

```bash section 5
null
```

#### **Windows, dualboot to linux!**

```javascript
null;
```

---

### Ch10 section 6

**_`Provisioning a server for the user authentication service`_**

```bash section 6
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 7

**_`Testing the deployed user authentication service`_**

```bash section 7
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 8

**_`Script execution in PowerShell on Windows`_**

```bash section 8
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 9

**_`Provisioning a server for the Notes service`_**

```bash section 9
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 10

**_`Adjusting Twitter authentication to work on the server`_**

```bash section 10
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 11

**_`Setting up PM2 to manage Node.js processes`_**

```bash section 11
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 12

**_`Familiarizing ourselves with PM2`_**

```bash section 12
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 13

**_`Scripting the PM2 setup on Multipass`_**

```bash section 13
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 14

**_`Integrating the PM2 setup as persistent background processes`_**

```bash section 14
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch10 section 15

**_`Summary`_**

```bash section 15
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

---

## Chapter 11

---

---

### Ch11 section 1

**_`Deploying Node.js Microservices with Docker`_**

```bash section 1
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 2

**_`Setting up Docker on your laptop or computer`_**

```bash section 2
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 3

**_`Installing and starting Docker with Docker for Windows or macOS`_**

```bash section 3
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 4

**_`Familiarizing ourselves with Docker`_**

```bash section 4
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 5

**_`Setting up the user authentication service in Docker`_**

```bash section 5
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 6

**_`Launching a MySQL container in Docker`_**

```bash section 6
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 7

**_`The ephemeral nature of Docker containers`_**

```bash section 7
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 8

**_`Defining the Docker architecture for the authentication service`_**

```bash section 8
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 9

**_`Creating the MySQL container for the authentication service`_**

```bash section 9
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 10

**_`Security in the database container`_**

```bash section 10
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 11

**_`Dockerizing the authentication service`_**

```bash section 11
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 12

**_`Creating the authentication service Dockerfile`_**

```bash section 12
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 13

**_`Building and running the authentication service Docker container`_**

```bash section 13
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 14

**_`Exploring AuthNet`_**

```bash section 14
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 15

**_`Creating FrontNet for the Notes application`_**

```bash section 15
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 16

**_`MySQL container for the Notes application`_**

```bash section 16
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 17

**_`Dockerizing the Notes application`_**

```bash section 17
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 18

**_`Managing multiple containers with Docker Compose`_**

```bash section 18
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 19

**_`Docker Compose file for the Notes stack`_**

```bash section 19
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 20

**_`Building and running the Notes application with Docker Compose`_**

```bash section 20
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 21

**_`Using Redis for scaling the Notes application stack`_**

```bash section 21
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 22

**_`Testing session management with multiple Notes service instances`_**

```bash section 22
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 23

**_`Storing Express/Passport session data in a Redis server`_**

```bash section 23
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 24

**_`Distributing Socket.IO messages using Redis`_**

```bash section 24
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch11 section 25

**_`Summary`_**

```bash section 25
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

---

## Chapter 12

---

---

### Ch12 section 1

**_`Deploying a Docker Swarm to AWS EC2 with Terraform`_**

```bash section 1
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 2

**_`Signing up with AWS and configuring the AWS CLI`_**

```bash section 2
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 3

**_`Finding your way around the AWS account`_**

```bash section 3
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 4

**_`Setting up the AWS CLI using AWS authentication credentials`_**

```bash section 4
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 5

**_`Creating an IAM user account, groups, and roles`_**

```bash section 5
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 6

**_`Creating an EC2 key pair`_**

```bash section 6
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 7

**_`An overview of the AWS infrastructure to be deployed`_**

```bash section 7
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 8

**_`Using Terraform to create an AWS infrastructure`_**

```bash section 8
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 9

**_`Configuring an AWS VPC with Terraform`_**

```bash section 9
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 10

**_`Configuring the AWS gateway and subnet resources`_**

```bash section 10
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 11

**_`Deploying the infrastructure to AWS using Terraform`_**

```bash section 11
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 12

**_`Setting up a Docker Swarm cluster on AWS EC2`_**

```bash section 12
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 13

**_`Deploying a single-node Docker Swarm on a single EC2 instance`_**

```bash section 13
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 14

**_`Adding an EC2 instance and configuring Docker`_**

```bash section 14
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 15

**_`Launching the EC2 instance on AWS`_**

```bash section 15
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 16

**_`Handling the AWS EC2 key-pair file`_**

```bash section 16
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 17

**_`Testing the initial Docker Swarm`_**

```bash section 17
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 18

**_`Setting up remote control access to a Docker Swarm hosted on EC2`_**

```bash section 18
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 19

**_`Setting up ECR repositories for Notes Docker images`_**

```bash section 19
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 20

**_`Using environment variables for AWS CLI commands`_**

```bash section 20
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 21

**_`Defining a process to build Docker images and push them to the AWS ECR`_**

```bash section 21
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 22

**_`Creating a Docker stack file for deployment to Docker Swarm`_**

```bash section 22
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 23

**_`Creating a Docker stack file from the Notes Docker compose file`_**

```bash section 23
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 24

**_`Placing containers across the swarm`_**

```bash section 24
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 25

**_`Configuring secrets in Docker Swarm`_**

```bash section 25
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 26

**_`Configuring secrets in Docker Swarm`_**

```bash section 26
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 27

**_`Provisioning EC2 instances for a full Docker swarm`_**

```bash section 27
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

### Ch12 section 28

**_`Provisioning EC2 instances for a full Docker swarm`_**

```bash section 28
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 29

**_`Implementing semi-automatic initialization of the Docker Swarm`_**

```bash section 29
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 30

**_`Preparing the Docker Swarm before deploying the Notes stack`_**

```bash section 30
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 31

**_`Preparing the Docker Swarm before deploying the Notes stack`_**

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 31
code sample
code sample
code sample
```

---

### Ch12 section 32

**_`Preparing to deploy the Notes stack to the swarm`_**

```bash section 32
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 33

**_`Deploying the Notes stack to the swarm`_**

```bash section 33
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 34

**_`Verifying the correct launch of the Notes application stack`_**

```bash section 34
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 35

**_`Diagnosing a failure to launch the database services`_**

```bash section 35
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 36

**_`Testing the deployed Notes application`_**

```bash section 36
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 37

**_`Logging in with a regular account on Notes`_**

```bash section 37
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 38

**_`Diagnosing an inability to log in with Twitter credentials`_**

```bash section 38
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 39

**_`Scaling the Notes instances`_**

```bash section 39
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch12 section 40

**_`Summary`_**

```bash section 40
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

---

## Chapter 13

---

---

### Ch13 section 1

**_`Unit Testing and Functional Testing`_**

```bash section 1
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 2

**_`Assert – the basis of testing methodologies`_**

```bash section 2
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 3

**_`Testing a Notes model`_**

```bash section 3
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 4

**_`Mocha and Chai­ – the chosen test tools`_**

```bash section 4
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 5

**_`Notes model test suite`_**

```bash section 5
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 6

**_`Creating the initial Notes model test case`_**

```bash section 6
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 7

**_`Running the first test case`_**

```bash section 7
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 8

**_`Adding some tests`_**

```bash section 8
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 9

**_`More tests for the Notes model`_**

```bash section 9
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 10

**_`Diagnosing test failures`_**

```bash section 10
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 11

**_`Testing against databases that require server setup – MySQL and MongoDB`_**

```bash section 11
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 12

**_`Using Docker Swarm to manage test infrastructure`_**

```bash section 12
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 13

**_`Using Docker Swarm to deploy test infrastructure`_**

```bash section 13
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 14

**_`Executing tests under Docker Swarm`_**

```bash section 14
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 15

**_`MongoDB setup under Docker and testing Notes against MongoDB`_**

```bash section 15
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 16

**_`Testing REST backend services`_**

```bash section 16
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 17

**_`Automating test results reporting`_**

```bash section 17
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 18

**_`Frontend headless browser testing with Puppeteer`_**

```bash section 18
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 19

**_`Setting up a Puppeteer-based testing project directory`_**

```bash section 19
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 20

**_`Creating an initial Puppeteer test for the Notes application stack`_**

```bash section 20
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 21

**_`Executing the initial Puppeteer test`_**

```bash section 21
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 22

**_`Testing login/logout functionality in Notes`_**

```bash section 22
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 23

**_`Testing the ability to add Notes`_**

```bash section 23
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 24

**_`Implementing negative tests with Puppeteer`_**

```bash section 24
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 25

**_`Testing login with a bad user ID`_**

```bash section 25
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 26

**_`Testing a response to a bad URL`_**

```bash section 26
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 27

**_`Improving testability in the Notes UI`_**

```bash section 27
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch13 section 28

**_`Summary`_**

```bash section 28
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

---

## Chapter 14

---

---

### Ch14 section 1

**_`Security in Node.js Applications`_**

```bash section 1
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 2

**_`Implementing HTTPS in Docker for deployed Node.js applications`_**

```bash section 2
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 3

**_`Assigning a domain name for an application deployed on AWS EC2`_**

```bash section 3
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 4

**_`Updating the Twitter application`_**

```bash section 4
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 5

**_`Planning how to use Let's Encrypt`_**

```bash section 5
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 6

**_`Using NGINX and Let's Encrypt in Docker to implement HTTPS for Notes`_**

```bash section 6
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 7

**_`Adding the Cronginx container to support HTTPS on Notes`_**

```bash section 7
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 8

**_`Creating an NGINX configuration to support registering domains with Let's Encrypt`_**

```bash section 8
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 9

**_`Adding the required directories on the EC2 host`_**

```bash section 9
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 10

**_`Deploying the EC2 cluster and Docker swarm`_**

```bash section 10
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 11

**_`Registering a domain with Let's Encrypt`_**

```bash section 11
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 12

**_`Implementing an NGINX HTTPS configuration using Let's Encrypt certificates`_**

```bash section 12
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 13

**_`Testing HTTPS support for the Notes application`_**

```bash section 13
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 14

**_`Using Helmet for across-the-board security in Express applications`_**

```bash section 14
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 15

**_`Using Helmet to set the Content-Security-Policy header`_**

```bash section 15
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 16

**_`Making the ContentSecurityPolicy configurable`_**

```bash section 16
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 17

**_`Using Helmet to set the X-DNS-Prefetch-Control header`_**

```bash section 17
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 18

**_`Using Helmet to control enabled browser features using the Feature-Policy header`_**

```bash section 18
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 19

**_`Using Helmet to set the X-Frame-Options header`_**

```bash section 19
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

### Ch14 section 20

**_`Improving HTTPS with Strict Transport Security`_**

```bash section 20
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 21

**_`Improving HTTPS with Strict Transport Security`_**

```bash section 21
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 22

**_`Mitigating XSS attacks with Helmet`_**

```bash section 22
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 23

**_`Addressing Cross-Site Request Forgery (CSRF) attacks`_**

```bash section 23
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 24

**_`Denying SQL injection attacks`_**

```bash section 24
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 25

**_`Scanning for known vulnerabilities in Node.js packages`_**

```bash section 25
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 26

**_`Using good cookie practices`_**

```bash section 26
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 27

**_`Hardening the AWS EC2 deployment`_**

```bash section 27
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 28

**_`AWS EC2 security best practices`_**

```bash section 28
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---

### Ch14 section 29

**_`Summary`_**

```bash section 29
code sample
code sample
code sample
```

#### **notez/namethisFILE**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

---
