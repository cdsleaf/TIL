# HTML/CSS Interview Questions

### 1. Avatar

Every user on your website has an image avatar that is displayed when they post a comment. You want to style these images differently from other images on your site. Add a CSS class named avatar that fulfils the following requirements:

The avatar's border is rounded, so that it appears as a circle.
The avatar's width and height are both 150px.
The avatar has a solid border, has a width of 2px, and be colored gray.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Avatar</title>
    <style>
      .avatar {
        width: 150px;
        height: 150px;
        border: 2px solid gray;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <img class="avatar" src="https://goo.gl/khGCrk" alt="avatar" />
  </body>
</html>
```
 
 ### 2. Semantics

Update the website's HTML, without using JavaScript or CSS, to make use of semantic elements so that:

- The classless outer div element is replaced with a more appropriate element.
- The divs with the image and caption classes are replaced with self-contained content elements.
- The divs with the lorem-ipsum and description classes are replaced with elements, so that by default only the contents of the description element are shown. When the contents of the description element are clicked, the visibility of the rest of the lorem-ipsum element is toggled.

 ```html
 <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Semantics</title>
  </head>
  <body>
    <article>
      <h1>Lorem Ipsum</h1>
      
      <figure>
        <img src="https://goo.gl/zF9eky" alt="Lorem Ipsum">
        <figcaption>Lorem Ipsum</figcaption>
      </figure>
      
      <details>
        <summary >Lorem ipsum dolor sit amet, consectetur adipiscing elit...</summary>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur vitae hendrerit mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris lacinia scelerisque nibh nec gravida. 
          Duis malesuada nec nibh sit amet pulvinar. 
          Phasellus congue porttitor arcu, ut suscipit nibh aliquam vel. 
          Nunc arcu lectus, egestas ut sem ac, euismod porttitor eros. 
          Phasellus tincidunt consequat pharetra. Maecenas sodales purus at nulla finibus dapibus. 
          Nullam varius at nisl vel euismod. Fusce aliquet ligula non tempor fermentum. 
          Nam fermentum posuere mauris, quis aliquam nibh dictum sed.</p>
      </details>
    </article>
  </body>
</html>
```

### 3. Spreadsheet

You've been sent a snippet from a spreadsheet, and have been asked to re-create it for display on the company's internal website.

Re-create the following spreadsheet using HTML, in a table appropriately captioned "Purchase Orders".

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Spreadsheet</title>
    <style>
      td {
        text-align: right;
        width: 33%;
      }
      td, th, table {
        border: 1px solid;
        border-collapse: collapse;
      }
      th {
        text-align: left;
      }
      thead {
        font-weight: bold;
      }
      thead td {
        text-align: left;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>Purchase Orders</caption>
      <thead>
        <tr>
          <th>Order Date</th>
          <th>SKU</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>07-16-2018</td>
          <td>523402</td>
          <td>54</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

### 4. Styling Links

Write CSS so that link <a href="http://www.testdome.com">Check documentation</a> and cursor looks like a question mark:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Styling links</title>
    <style type="text/css">
      a {
        text-decoration: none;
        cursor: help;
        text-transform: uppercase;
      }
      a:after {
        content: "<";
      }
      a:before {
        content: ">";
      }
    </style>
  </head>
  <body>
    <a href="http://www.testdome.com">Check documentation</a>
  </body>
</html>
```

### 5. Inspector

Fix the bugs in the following HTML code.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Company page</title>
  </head>
  <body>
    <p>Welcome! Here you can find the following things:</p>
    <ol>
      <li><a href="#logo"><em>Company's logo</em></a></li>
      <li><a href="#employees">List of employees</a></li>
    </ol>

    <h1>Company's logo</h1>
    <p>Company uses the following logos:</p>
    <ul>
      <li>New logo: <img src="new_logo.gif"/></li>
      <li>Old logo: <img src="old_logo.gif"/></li>
    </ul>

    <h1>List of employees</h1>
    
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mary</td>
          <td>Williams</td>
        </tr>
        <tr>
          <td>James</td>
          <td>Smith</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

### 6. Advanced Form

With the new HTML5 features, modify the form so that:

- The formula input field has an autocomplete option with the following options: "sin", "cos", "tan" and "cot".
- The iterations input field is a slider with possible values from 1 to 10.
- The precision input field is a number picker with possible values from 1 to 100, where 50 is the default value.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Advanced form</title>
</head>
<body>
  <form>
    Formula: <input name="formula" list="trigonometry"><br />
    <datalist id="trigonometry">
      <option>sin</option>
      <option>cos</option>
      <option>tan</option>
      <option>cot</option>
    </datalist>
    Iterations: <input type="range" min=1 max=10 name="iterations"><br />
    Precision: <input type="number" min=1 max=100 value=50 name="precision"><br />
  </form>
</body>
</html>
```

### 7. Articles

Using CSS only (without adding additional HTML attributes), style articles so that they occupy the whole browser window and have the following properties:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Articles</title>
  <style>
    html, body {
      margin: 0px;
      height: 100%
    }
    article {
      width: 50%;
      height: 50%;
      float: left;
    }
    article:nth-of-type(1){
      background: red;
    }
    article:nth-of-type(2){
      background: yellow;
    }
    article:nth-of-type(3){
      background: blue;
    }
    article:nth-of-type(4){
      background: green;
    }
    /* Write your CSS solution here (do not edit the surrounding HTML) */
  </style>
</head>
<body>
  <article>First</article>
  <article>Second</article>
  <article>Third</article>
  <article>Fourth</article>
</body>
</html>
```