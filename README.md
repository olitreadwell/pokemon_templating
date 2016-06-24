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
1. Use the `path` module to normalize the path to the `public` directory.
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

### Part 3

For today’s warmup, your goal is to refactor your error handling middleware to render an error template.

- Create a new template in the views directory called `error.ejs`
- Change your `404` and `500` error handlers to render `error.ejs` with information from the error object. (err.message, err.status, err.stack, etc.)
- Use Materialize to style the page however you’d like, think of GitHub’s 404 page for inspiration.

Your refactored error handlers could look like this:
```
app.use(function(_req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, _req, res, _next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
```

### Part 4

Use EJS partials to refactor your templates. Anywhere there is repeated code is usually a good case to use a partial.

- Inside the `views` directory, make a new directory titled `partials`.
- Read the following tutorial, specifically the section about using partials

#### Resources
[Use EJS to template your Node application](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
