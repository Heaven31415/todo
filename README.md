# Things To Do

A simple todo list app written with HTML, Sass and JavaScript

Project structure is based on [static site boilerplate](https://staticsiteboilerplate.com)

## Requirements

You need a quite recent version of node, npm and git to build this project

## Building and Using

First you need to run `npm install` on your terminal to download all necessary dependencies

---

Run a local server with a development version of the project:

* `npm run start`

---

Runs a local server with a distributable version of the project:

* `npm run start:dist`

---

Build a distributable version of the project and output it to the dist folder

* `npm run build:dist`

---

Copy contents of dist directory to your remote production server via SFTP:

* `npm run deploy`

To use it you need to create a proper `sftp.json` file in your config directory

```json
{
  "host": "yourwebsite.com",
  "port": 22,
  "username": "user",
  "password": "password",
  "remoteRoot": "/path/to/your/public/html"
}
```
