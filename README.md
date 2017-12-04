# Dashboard Style Helpers

## What is this?

This is a repo of css helpers to make Superset dashboard styles more consistent.

## Where do I find the css helpers?

CSS helpers can be found in `app/css` and are also accessible via github pages for import.

## How do I set this up locally and edit a stylesheet?

The helpers are built with Stylus, a CSS preprocessor, and then compiled to CSS via gulp.

To set up the repo:

* clone the repo
* `npm i`
* `gulp` - this will listen for changes to your `.styl` files and compile changes. 

In `app/styl` you will find the stylus files where you can edit and compile.
