# Pokemon Templating

### Part 1

Using a provided data set, implement an Express server that renders content using a templating engine.

1. Fork and clone this repository
1. `cd` into the `pokemon_templating` directory
1. Run `npm install`
1. Start the server with `nodemon server.js`
1. Visit `localhost:8000/pokemon` to see a table of all Pokemon
1. Visit `localhost:8000/pokemon/:id` to see an individual Pokemon

#### Resources

- [res.render](http://expressjs.com/en/api.html#res.render)
- [Using templating engines](http://expressjs.com/en/guide/using-template-engines.html)
- [ejs](https://www.npmjs.com/package/ejs)

### Part 2

Successfully load the files needed to use Materialize to style template content.

1. Read this short article: [Serving static files in Express](http://expressjs.com/en/starter/static-files.html).
1. Use the `path` module to normalize the path `public` directory.
1. In the `server.js` file, write a middleware function to serve static files.
1. Duplicate your existing template files to make two new files titled `index2.ejs` and `profile2.ejs`.
1. Write the `<meta>`, `<link>`, and `<script>` tags needed to load the static files for Materialize.
1. Restyle how the content is rendered using Materialize components.

**HINT:** The `public` directory already includes the static files needed for Materialize and a `styles.css` file to define custom styles if wanted.

#### Resources

- [__dirname](https://nodejs.org/api/globals.html#globals_dirname)
- [path.join()](https://nodejs.org/api/path.html#path_path_join_path)
- [Why use path.join?](http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js)
- [Materialize setup](http://materializecss.com/getting-started.html)
