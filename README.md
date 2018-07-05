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

In `app/styl` you will find the stylus files where you can make edits. They will automatically be compiled into CSS via Gulp.

## How do I use this to style dashboards?
There are 2 templates that have been created for styling Superset dashboards in this repo:

* For editing, all styles but show chart controls: This provides all the dashboard styling while retaining the chart controls so you can continue editings. 

  * *In Superset,* this can be activated by picking the `Authoring Dashboard CSS - no button wipeout` option
  * *In this repo*, you can adjust this template by editing `dashboard--master--no-button-wipeout.styl`

* For production, all styles and hide chart controls: This provides all the dashboard styling and also hides the chart controls and superset header.
  * *In Superset,* this can be activated by picking the `Authoring Dashboard CSS - with button wipeout` option
  * *In this repo*, you can adjust this template by editing `dashboard--master.styl` and its associated files

## I just need the button/header wipeout - what do I do?
You can add the button wipeout by calling this css in superset:
`@import url('https://massgov.github.io/dashboard-style-helpers/app/css/dashboard--wipeout-buttons.css')`

## How do I use this to add text to dashboards?

Here is how you create a text slice within Superset.

* Create a new markup slice: You can do this by either creating a new one or saving an existing markup slice with a new name. 
* Pick `html` under the code settings
* Open the code editor and copy in the stylesheet import at the top:
```
  <style type="text/css" scoped>
        @import url('https://massgov.github.io/dashboard-style-helpers/app/css/dashboard--type-styles.css');
  </style>
```
* Below that, start writing your HTML. You can use this starter block to get started.
99% of the styles are applied to default tags rather than by class. The one exception is for the `text-wrapper` which can be applied to a div to constrains the width of a text container so it is more readable.

```
    <h1>I am a H1. I should be used for the dashboard title </h1>

    <h2> I am a H2. I should be used to start a section of a dashboard. </h2>

    <div class="text-wrapper">

        <h3> I am a H3. You should use me for subheadings within a section.</h3>

        <p>I am a p tag. You can use me for any of your descriptions. You can also <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">add links with an a tag</a>, or <i>italicize text</i> with <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i">the i tag</a>, or <b>bold text</b> with <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b">the b tag.</a></p>

        <p>Create new paragraphs with a new set of tags. Here is an example of an unordered list built with <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"> the ul tag</a>:</p>

       <ul>
          <li>This list is great.</li>

         <li>I am also great.</li>
        </ul>

       <p>You can also do ordered lists with the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"> the ol tag</a>:</p>

        <ol>
         <li>This list is great.</li>

         <li>I am also great.</li>
        </ol>
```
* You can also reference these demo docs as [rendered HTML here](https://massgov.github.io/dashboard-style-helpers/demo/demo--type-styles.html), or, if you'd like to see the raw files, you can find them as [raw HTML here](https://github.com/massgov/dashboard-style-helpers/blob/master/demo/demo--type-styles.html).
