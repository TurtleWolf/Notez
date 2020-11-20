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
...
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

### CH06 section 15

**_`Cleaning up the note viewing experience`_**

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

### CH06 section 16

**_`Cleaning up the add/edit note form`_**

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

### CH06 section 17

**_`Cleaning up the delete-note window`_**

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

### CH06 section 18

**_`Customizing a Bootstrap build`_**

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

### CH06 section 19

**_`Using third-party custom Bootstrap themes`_**

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

### CH06 section 20

**_`Summary`_**

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

---

## Chapter 07

---

---

### CH07 section 1

**_`Data Storage and Retrieval`_**

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

### CH07 section 2

**_`Remembering that data storage requires asynchronous code`_**

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

### CH07 section 3

**_`Logging and capturing uncaught errors`_**

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

### CH07 section 4

**_`Request logging with morgan`_**

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

### CH07 section 5

**_`Debugging messages`_**

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

### CH07 section 6

**_`Capturing stdout and stderr`_**

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

### CH07 section 7

**_`Capturing uncaught exceptions and unhandled rejected Promises`_**

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

### CH07 section 8

**_`Storing notes in a filesystem`_**

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

### CH07 section 9

**_`Dynamically importing ES6 modules`_**

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

### CH07 section 10

**_`Running the Notes application with filesystem storage`_**

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

### CH07 section 11

**_`Storing notes with the LevelDB datastore`_**

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

### CH07 section 12

**_`Closing database connections when closing the process`_**

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

### CH07 section 13

**_`Storing notes in SQL with SQLite3`_**

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

### CH07 section 14

**_`The SQLite3 database schema`_**

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

### CH07 section 15

**_`The SQLite3 model code`_**

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

### CH07 section 16

**_`Running Notes with SQLite3`_**

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

### CH07 section 17

**_`Storing notes the ORM way with Sequelize`_**

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

### CH07 section 18

**_`Configuring Sequelize and connecting to a database`_**

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

### CH07 section 19

**_`Creating a Sequelize model for the Notes application`_**

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

### CH07 section 20

**_`Running the Notes application with Sequelize`_**

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

### CH07 section 21

**_`Storing notes in MongoDB`_**

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

### CH07 section 22

**_`A MongoDB model for the Notes application`_**

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

### CH07 section 23

**_`Running the Notes application with MongoDB`_**

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

### CH07 section 24

**_`Summary`_**

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

---

## Chapter 08

---

---

### Ch08 section 1

**_`Authenticating Users with a Microservice`_**

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

### Ch08 section 2

**_`Creating a user information microservice`_**

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

### Ch08 section 3

**_`Developing the user information model`_**

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

### Ch08 section 4

**_`Creating a REST server for user information`_**

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

### Ch08 section 5

**_`Creating a command-line tool to test and administer the user authentication server`_**

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

### Ch08 section 6

**_`Creating a user in the user information database`_**

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

### Ch08 section 7

**_`Reading user data from the user information service`_**

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

### Ch08 section 8

**_`Updating user information in the user information service`_**

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

### Ch08 section 9

**_`Deleting a user record from the user information service`_**

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

### Ch08 section 10

**_`Checking the user's password in the user information service`_**

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

### Ch08 section 11

**_`Providing login support for the Notes application`_**

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

### Ch08 section 12

**_`Accessing the user authentication REST API`_**

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

### Ch08 section 13

**_`Incorporating login and logout routing functions in the Notes application`_**

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

### Ch08 section 14

**_`Login/logout changes to app.mjs`_**

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

### Ch08 section 15

**_`Login/logout changes in routes/index.mjs`_**

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

### Ch08 section 16

**_`Login/logout changes required in routes/notes.mjs`_**

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

### Ch08 section 17

**_`Viewing template changes supporting login/logout`_**

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

### Ch08 section 18

**_`Running the Notes application with user authentication`_**

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

### Ch08 section 19

**_`Providing Twitter login support for the Notes application`_**

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

### Ch08 section 20

**_`Registering an application with Twitter`_**

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

### Ch08 section 21

**_`Storing authentication tokens`_**

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

### Ch08 section 22

**_`Implementing TwitterStrategy`_**

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

### Ch08 section 23

**_`Keeping secrets and passwords secure`_**

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

### Ch08 section 24

**_`Adding password encryption to the user information service`_**

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

### Ch08 section 25

**_`Implementing encrypted password support in the Notes application`_**

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

### Ch08 section 26

**_`Running the Notes application stack`_**

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

### Ch08 section 27

**_`Summary`_**

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

---

## Chapter 09

---

---

### Ch09 section 1

**_`Dynamic Client/Server Interaction with Socket.IO`_**

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

### Ch09 section 2

**_`Introducing Socket.IO`_**

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

### Ch09 section 3

**_`Initializing Socket.IO with Express`_**

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

### Ch09 section 4

**_`Real-time updates on the Notes homepage`_**

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

### Ch09 section 5

**_`Refactoring the NotesStore classes to emit events`_**

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

### Ch09 section 6

**_`Real-time changes in the Notes home page`_**

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

### Ch09 section 7

**_`Changing the home page and layout templates`_**

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

### Ch09 section 8

**_`Adding a Socket.IO client to the Notes home page`_**

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

### Ch09 section 9

**_`Running Notes with real-time home page updates`_**

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

### Ch09 section 10

**_`A word on enabling debug tracing in Socket.IO code`_**

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

### Ch09 section 11

**_`Real-time action while viewing notes`_**

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

### Ch09 section 12

**_`Changing the note view template for real-time action`_**

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

### Ch09 section 13

**_`Running Notes with pseudo-real-time updates while viewing a note`_**

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

### Ch09 section 14

**_`Inter-user chat and commenting for Notes`_**

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

### Ch09 section 15

**_`Data model for storing messages`_**

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

### Ch09 section 16

**_`Adding support for messages to the Notes router`_**

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

### Ch09 section 17

**_`Changing the note view template for messages`_**

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

### Ch09 section 18

**_`Composing messages on the Note view page`_**

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

### Ch09 section 19

**_`Showing any existing messages on the Note view page`_**

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

### Ch09 section 20

**_`Deleting messages on the Notes view page`_**

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

### Ch09 section 21

**_`Running Notes and passing messages`_**

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

### Ch09 section 22

**_`Summary`_**

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

---

## Chapter 10

---

---

### Ch10 section 1

**_`Deploying Node.js Applications to Linux Servers`_**

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

### Ch10 section 2

**_`Notes application architecture and deployment considerations`_**

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

### Ch10 section 3

**_`Traditional Linux deployment for Node.js services`_**

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

### Ch10 section 4

**_`Installing Multipass`_**

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

### Ch10 section 5

**_`Handling a failure to launch Multipass instances on Windows`_**

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
