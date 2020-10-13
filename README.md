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
code sample
code sample
code sample
```

---

### Ch05 section 11

**_`Implementing an in-memory Notes datastore`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch05 section 12

**_`The Notes home page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch05 section 13

**_`Adding a new note – create`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch05 section 14

**_`Viewing notes – read`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch05 section 15

**_`Editing an existing note – update`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch05 section 16

**_`Editing an existing note – update`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch05 section 17

**_`Theming your Express application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch05 section 18

**_`Scaling up – running multiple Notes instances`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch05 section 19

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

---

## Chapter 06

---

---

### CH06 section 1

**_`Implementing the Mobile-First Paradigm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### CH06 section 2

**_`Understanding the problem – the Notes app isn't mobile-friendly`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### CH06 section 3

**_`Learning the mobile-first paradigm theory`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### CH06 section 4

**_`Using Twitter Bootstrap on the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### CH06 section 5

**_`Setting up Bootstrap`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### CH06 section 6

**_`Adding Bootstrap to the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### CH06 section 7

**_`Alternative layout frameworks`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### CH06 section 8

**_`Flexbox and CSS Grids`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### CH06 section 9

**_`Mobile-first design for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### CH06 section 10

**_`Laying the Bootstrap grid foundation`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### CH06 section 11

**_`Responsive page structure for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### CH06 section 12

**_`Using icon libraries and improving visual appeal`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### CH06 section 13

**_`Responsive page header navigation bar`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### CH06 section 14

**_`Improving the Notes list on the front page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### CH06 section 15

**_`Cleaning up the note viewing experience`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### CH06 section 16

**_`Cleaning up the add/edit note form`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### CH06 section 17

**_`Cleaning up the delete-note window`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### CH06 section 18

**_`Customizing a Bootstrap build`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### CH06 section 19

**_`Using third-party custom Bootstrap themes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### CH06 section 20

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

---

## Chapter 07

---

---

### CH07 section 1

**_`Data Storage and Retrieval`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### CH07 section 2

**_`Remembering that data storage requires asynchronous code`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### CH07 section 3

**_`Logging and capturing uncaught errors`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### CH07 section 4

**_`Request logging with morgan`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### CH07 section 5

**_`Debugging messages`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### CH07 section 6

**_`Capturing stdout and stderr`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### CH07 section 7

**_`Capturing uncaught exceptions and unhandled rejected Promises`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### CH07 section 8

**_`Storing notes in a filesystem`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### CH07 section 9

**_`Dynamically importing ES6 modules`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### CH07 section 10

**_`Running the Notes application with filesystem storage`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### CH07 section 11

**_`Storing notes with the LevelDB datastore`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### CH07 section 12

**_`Closing database connections when closing the process`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### CH07 section 13

**_`Storing notes in SQL with SQLite3`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### CH07 section 14

**_`The SQLite3 database schema`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### CH07 section 15

**_`The SQLite3 model code`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### CH07 section 16

**_`Running Notes with SQLite3`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### CH07 section 17

**_`Storing notes the ORM way with Sequelize`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### CH07 section 18

**_`Configuring Sequelize and connecting to a database`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### CH07 section 19

**_`Creating a Sequelize model for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### CH07 section 20

**_`Running the Notes application with Sequelize`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### CH07 section 21

**_`Storing notes in MongoDB`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### CH07 section 22

**_`A MongoDB model for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

### CH07 section 23

**_`Running the Notes application with MongoDB`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 23
code sample
code sample
code sample
```

---

### CH07 section 24

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 24
code sample
code sample
code sample
```

---

---

## Chapter 08

---

---

### Ch08 section 1

**_`Authenticating Users with a Microservice`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch08 section 2

**_`Creating a user information microservice`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch08 section 3

**_`Developing the user information model`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch08 section 4

**_`Creating a REST server for user information`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch08 section 5

**_`Creating a command-line tool to test and administer the user authentication server`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch08 section 6

**_`Creating a user in the user information database`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch08 section 7

**_`Reading user data from the user information service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch08 section 8

**_`Updating user information in the user information service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch08 section 9

**_`Deleting a user record from the user information service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch08 section 10

**_`Checking the user's password in the user information service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch08 section 11

**_`Providing login support for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch08 section 12

**_`Accessing the user authentication REST API`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch08 section 13

**_`Incorporating login and logout routing functions in the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch08 section 14

**_`Login/logout changes to app.mjs`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch08 section 15

**_`Login/logout changes in routes/index.mjs`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch08 section 16

**_`Login/logout changes required in routes/notes.mjs`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch08 section 17

**_`Viewing template changes supporting login/logout`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch08 section 18

**_`Running the Notes application with user authentication`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch08 section 19

**_`Providing Twitter login support for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### Ch08 section 20

**_`Registering an application with Twitter`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### Ch08 section 21

**_`Storing authentication tokens`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### Ch08 section 22

**_`Implementing TwitterStrategy`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

### Ch08 section 23

**_`Keeping secrets and passwords secure`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 23
code sample
code sample
code sample
```

---

### Ch08 section 24

**_`Adding password encryption to the user information service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 24
code sample
code sample
code sample
```

---

### Ch08 section 25

**_`Implementing encrypted password support in the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 25
code sample
code sample
code sample
```

---

### Ch08 section 26

**_`Running the Notes application stack`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 26
code sample
code sample
code sample
```

---

### Ch08 section 27

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 27
code sample
code sample
code sample
```

---

---

## Chapter 09

---

---

### Ch09 section 1

**_`Dynamic Client/Server Interaction with Socket.IO`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch09 section 2

**_`Introducing Socket.IO`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch09 section 3

**_`Initializing Socket.IO with Express`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch09 section 4

**_`Real-time updates on the Notes homepage`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch09 section 5

**_`Refactoring the NotesStore classes to emit events`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch09 section 6

**_`Real-time changes in the Notes home page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch09 section 7

**_`Changing the home page and layout templates`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch09 section 8

**_`Adding a Socket.IO client to the Notes home page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch09 section 9

**_`Running Notes with real-time home page updates`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch09 section 10

**_`A word on enabling debug tracing in Socket.IO code`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch09 section 11

**_`Real-time action while viewing notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch09 section 12

**_`Changing the note view template for real-time action`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch09 section 13

**_`Running Notes with pseudo-real-time updates while viewing a note`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch09 section 14

**_`Inter-user chat and commenting for Notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch09 section 15

**_`Data model for storing messages`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch09 section 16

**_`Adding support for messages to the Notes router`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch09 section 17

**_`Changing the note view template for messages`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch09 section 18

**_`Composing messages on the Note view page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch09 section 19

**_`Showing any existing messages on the Note view page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### Ch09 section 20

**_`Deleting messages on the Notes view page`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### Ch09 section 21

**_`Running Notes and passing messages`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### Ch09 section 22

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

---

## Chapter 10

---

---

### Ch10 section 1

**_`Deploying Node.js Applications to Linux Servers`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch10 section 2

**_`Notes application architecture and deployment considerations`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch10 section 3

**_`Traditional Linux deployment for Node.js services`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch10 section 4

**_`Installing Multipass`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch10 section 5

**_`Handling a failure to launch Multipass instances on Windows`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch10 section 6

**_`Provisioning a server for the user authentication service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch10 section 7

**_`Testing the deployed user authentication service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch10 section 8

**_`Script execution in PowerShell on Windows`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch10 section 9

**_`Provisioning a server for the Notes service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch10 section 10

**_`Adjusting Twitter authentication to work on the server`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch10 section 11

**_`Setting up PM2 to manage Node.js processes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch10 section 12

**_`Familiarizing ourselves with PM2`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch10 section 13

**_`Scripting the PM2 setup on Multipass`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch10 section 14

**_`Integrating the PM2 setup as persistent background processes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch10 section 15

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

---

## Chapter 11

---

---

### Ch11 section 1

**_`Deploying Node.js Microservices with Docker`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch11 section 2

**_`Setting up Docker on your laptop or computer`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch11 section 3

**_`Installing and starting Docker with Docker for Windows or macOS`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch11 section 4

**_`Familiarizing ourselves with Docker`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch11 section 5

**_`Setting up the user authentication service in Docker`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch11 section 6

**_`Launching a MySQL container in Docker`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch11 section 7

**_`The ephemeral nature of Docker containers`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch11 section 8

**_`Defining the Docker architecture for the authentication service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch11 section 9

**_`Creating the MySQL container for the authentication service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch11 section 10

**_`Security in the database container`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch11 section 11

**_`Dockerizing the authentication service`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch11 section 12

**_`Creating the authentication service Dockerfile`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch11 section 13

**_`Building and running the authentication service Docker container`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch11 section 14

**_`Exploring AuthNet`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch11 section 15

**_`Creating FrontNet for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch11 section 16

**_`MySQL container for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch11 section 17

**_`Dockerizing the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch11 section 18

**_`Managing multiple containers with Docker Compose`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch11 section 19

**_`Docker Compose file for the Notes stack`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### Ch11 section 20

**_`Building and running the Notes application with Docker Compose`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### Ch11 section 21

**_`Using Redis for scaling the Notes application stack`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### Ch11 section 22

**_`Testing session management with multiple Notes service instances`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

### Ch11 section 23

**_`Storing Express/Passport session data in a Redis server`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 23
code sample
code sample
code sample
```

---

### Ch11 section 24

**_`Distributing Socket.IO messages using Redis`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 24
code sample
code sample
code sample
```

---

### Ch11 section 25

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 25
code sample
code sample
code sample
```

---

---

## Chapter 12

---

---

### Ch12 section 1

**_`Deploying a Docker Swarm to AWS EC2 with Terraform`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch12 section 2

**_`Signing up with AWS and configuring the AWS CLI`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch12 section 3

**_`Finding your way around the AWS account`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch12 section 4

**_`Setting up the AWS CLI using AWS authentication credentials`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch12 section 5

**_`Creating an IAM user account, groups, and roles`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch12 section 6

**_`Creating an EC2 key pair`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch12 section 7

**_`An overview of the AWS infrastructure to be deployed`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch12 section 8

**_`Using Terraform to create an AWS infrastructure`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch12 section 9

**_`Configuring an AWS VPC with Terraform`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch12 section 10

**_`Configuring the AWS gateway and subnet resources`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch12 section 11

**_`Deploying the infrastructure to AWS using Terraform`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch12 section 12

**_`Setting up a Docker Swarm cluster on AWS EC2`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch12 section 13

**_`Deploying a single-node Docker Swarm on a single EC2 instance`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch12 section 14

**_`Adding an EC2 instance and configuring Docker`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch12 section 15

**_`Launching the EC2 instance on AWS`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch12 section 16

**_`Handling the AWS EC2 key-pair file`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch12 section 17

**_`Testing the initial Docker Swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch12 section 18

**_`Setting up remote control access to a Docker Swarm hosted on EC2`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch12 section 19

**_`Setting up ECR repositories for Notes Docker images`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### Ch12 section 20

**_`Using environment variables for AWS CLI commands`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### Ch12 section 21

**_`Defining a process to build Docker images and push them to the AWS ECR`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### Ch12 section 22

**_`Creating a Docker stack file for deployment to Docker Swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

### Ch12 section 23

**_`Creating a Docker stack file from the Notes Docker compose file`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 23
code sample
code sample
code sample
```

---

### Ch12 section 24

**_`Placing containers across the swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 24
code sample
code sample
code sample
```

---

### Ch12 section 25

**_`Configuring secrets in Docker Swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 25
code sample
code sample
code sample
```

---

### Ch12 section 26

**_`Configuring secrets in Docker Swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 26
code sample
code sample
code sample
```

---

### Ch12 section 27

**_`Provisioning EC2 instances for a full Docker swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 27
code sample
code sample
code sample
```

---

### Ch12 section 28

**_`Provisioning EC2 instances for a full Docker swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 28
code sample
code sample
code sample
```

---

### Ch12 section 29

**_`Implementing semi-automatic initialization of the Docker Swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 29
code sample
code sample
code sample
```

---

### Ch12 section 30

**_`Preparing the Docker Swarm before deploying the Notes stack`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 30
code sample
code sample
code sample
```

---

### Ch12 section 31

**_`Preparing the Docker Swarm before deploying the Notes stack`_**

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

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 32
code sample
code sample
code sample
```

---

### Ch12 section 33

**_`Deploying the Notes stack to the swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 33
code sample
code sample
code sample
```

---

### Ch12 section 34

**_`Verifying the correct launch of the Notes application stack`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 34
code sample
code sample
code sample
```

---

### Ch12 section 35

**_`Diagnosing a failure to launch the database services`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 35
code sample
code sample
code sample
```

---

### Ch12 section 36

**_`Testing the deployed Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 36
code sample
code sample
code sample
```

---

### Ch12 section 37

**_`Logging in with a regular account on Notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 37
code sample
code sample
code sample
```

---

### Ch12 section 38

**_`Diagnosing an inability to log in with Twitter credentials`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 38
code sample
code sample
code sample
```

---

### Ch12 section 39

**_`Scaling the Notes instances`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 39
code sample
code sample
code sample
```

---

### Ch12 section 40

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 40
code sample
code sample
code sample
```

---

---

## Chapter 13

---

---

### Ch13 section 1

**_`Unit Testing and Functional Testing`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch13 section 2

**_`Assert – the basis of testing methodologies`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch13 section 3

**_`Testing a Notes model`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch13 section 4

**_`Mocha and Chai­ – the chosen test tools`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch13 section 5

**_`Notes model test suite`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch13 section 6

**_`Creating the initial Notes model test case`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch13 section 7

**_`Running the first test case`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch13 section 8

**_`Adding some tests`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch13 section 9

**_`More tests for the Notes model`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch13 section 10

**_`Diagnosing test failures`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch13 section 11

**_`Testing against databases that require server setup – MySQL and MongoDB`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch13 section 12

**_`Using Docker Swarm to manage test infrastructure`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch13 section 13

**_`Using Docker Swarm to deploy test infrastructure`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch13 section 14

**_`Executing tests under Docker Swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch13 section 15

**_`MongoDB setup under Docker and testing Notes against MongoDB`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch13 section 16

**_`Testing REST backend services`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch13 section 17

**_`Automating test results reporting`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch13 section 18

**_`Frontend headless browser testing with Puppeteer`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch13 section 19

**_`Setting up a Puppeteer-based testing project directory`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### Ch13 section 20

**_`Creating an initial Puppeteer test for the Notes application stack`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### Ch13 section 21

**_`Executing the initial Puppeteer test`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### Ch13 section 22

**_`Testing login/logout functionality in Notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

### Ch13 section 23

**_`Testing the ability to add Notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 23
code sample
code sample
code sample
```

---

### Ch13 section 24

**_`Implementing negative tests with Puppeteer`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 24
code sample
code sample
code sample
```

---

### Ch13 section 25

**_`Testing login with a bad user ID`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 25
code sample
code sample
code sample
```

---

### Ch13 section 26

**_`Testing a response to a bad URL`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 26
code sample
code sample
code sample
```

---

### Ch13 section 27

**_`Improving testability in the Notes UI`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 27
code sample
code sample
code sample
```

---

### Ch13 section 28

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 28
code sample
code sample
code sample
```

---

---

## Chapter 14

---

---

### Ch14 section 1

**_`Security in Node.js Applications`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 1
code sample
code sample
code sample
```

---

### Ch14 section 2

**_`Implementing HTTPS in Docker for deployed Node.js applications`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 2
code sample
code sample
code sample
```

---

### Ch14 section 3

**_`Assigning a domain name for an application deployed on AWS EC2`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 3
code sample
code sample
code sample
```

---

### Ch14 section 4

**_`Updating the Twitter application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 4
code sample
code sample
code sample
```

---

### Ch14 section 5

**_`Planning how to use Let's Encrypt`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 5
code sample
code sample
code sample
```

---

### Ch14 section 6

**_`Using NGINX and Let's Encrypt in Docker to implement HTTPS for Notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 6
code sample
code sample
code sample
```

---

### Ch14 section 7

**_`Adding the Cronginx container to support HTTPS on Notes`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 7
code sample
code sample
code sample
```

---

### Ch14 section 8

**_`Creating an NGINX configuration to support registering domains with Let's Encrypt`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 8
code sample
code sample
code sample
```

---

### Ch14 section 9

**_`Adding the required directories on the EC2 host`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 9
code sample
code sample
code sample
```

---

### Ch14 section 10

**_`Deploying the EC2 cluster and Docker swarm`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 10
code sample
code sample
code sample
```

---

### Ch14 section 11

**_`Registering a domain with Let's Encrypt`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 11
code sample
code sample
code sample
```

---

### Ch14 section 12

**_`Implementing an NGINX HTTPS configuration using Let's Encrypt certificates`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 12
code sample
code sample
code sample
```

---

### Ch14 section 13

**_`Testing HTTPS support for the Notes application`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 13
code sample
code sample
code sample
```

---

### Ch14 section 14

**_`Using Helmet for across-the-board security in Express applications`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 14
code sample
code sample
code sample
```

---

### Ch14 section 15

**_`Using Helmet to set the Content-Security-Policy header`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 15
code sample
code sample
code sample
```

---

### Ch14 section 16

**_`Making the ContentSecurityPolicy configurable`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 16
code sample
code sample
code sample
```

---

### Ch14 section 17

**_`Using Helmet to set the X-DNS-Prefetch-Control header`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 17
code sample
code sample
code sample
```

---

### Ch14 section 18

**_`Using Helmet to control enabled browser features using the Feature-Policy header`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 18
code sample
code sample
code sample
```

---

### Ch14 section 19

**_`Using Helmet to set the X-Frame-Options header`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 19
code sample
code sample
code sample
```

---

### Ch14 section 20

**_`Using Helmet to remove the X-Powered-By header`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 20
code sample
code sample
code sample
```

---

### Ch14 section 21

**_`Improving HTTPS with Strict Transport Security`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 21
code sample
code sample
code sample
```

---

### Ch14 section 22

**_`Mitigating XSS attacks with Helmet`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 22
code sample
code sample
code sample
```

---

### Ch14 section 23

**_`Addressing Cross-Site Request Forgery (CSRF) attacks`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 23
code sample
code sample
code sample
```

---

### Ch14 section 24

**_`Denying SQL injection attacks`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 24
code sample
code sample
code sample
```

---

### Ch14 section 25

**_`Scanning for known vulnerabilities in Node.js packages`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 25
code sample
code sample
code sample
```

---

### Ch14 section 26

**_`Using good cookie practices`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 26
code sample
code sample
code sample
```

---

### Ch14 section 27

**_`Hardening the AWS EC2 deployment`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 27
code sample
code sample
code sample
```

---

### Ch14 section 28

**_`AWS EC2 security best practices`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 28
code sample
code sample
code sample
```

---

### Ch14 section 29

**_`Summary`_**

```javascript
import * as notes from '../models/notes-memory.mjs';
import * as notes from '../models/notes.mjs';
```

```bash section 29
code sample
code sample
code sample
```

---
