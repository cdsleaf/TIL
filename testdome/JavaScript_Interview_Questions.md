# JavaScript Interview Questions

### 1. Ensure

Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

```javascript
function ensure(value) {
  if(value === undefined) throw Error
  return value;
}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}
```

### 2. Remove Property

Implement the removeProperty function which takes an object and property name, and does the following:

If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.

```javascript
function removeProperty(obj, prop) {
  if(obj.hasOwnProperty(prop)){
    delete obj[prop];
    return true
  }else{
    return false;
  }
}
```

### 3 Date

Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

```javascript
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const dateArray = userDate.split('/');
  return dateArray[2]
    + (dateArray[0].length === 1 ? '0'+dateArray[0] : dateArray[0])
    + (dateArray[1].length === 1 ? '0'+dateArray[1] : dateArray[1])
}

console.log(formatDate("12/31/2014"));
```

### 4. Image Gallery

An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:

Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it's HTML code should look like this:

```javascript
function setup() {
  const fn = ({ target }) => target.parentElement.remove();
  const button = document.getElementsByClassName("remove");
  [ ...button].forEach(obj => obj.addEventListener('click', fn))
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
```

### 5. Check Digit

Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

 - non recursive 
```javascript
function createCheckDigit(membershipId) {
  const caculateNumbers = id => [ ...id ].reduce((a,v)=> a+parseInt(v), 0);
  let digits = parseInt(membershipId);
  
  while(digits > 9){
    digits = caculateNumbers(digits+'');
  }
  
  return digits;
}

console.log(createCheckDigit("55555"));
```

- recursive

```javascript
function createCheckDigit(membershipId) {
  
  const recurFn = digits => {
    if(digits < 10) return digits;
    const calcuated = [ ...(digits+'') ].reduce((a,v)=> a + parseInt(v), 0);
    
    return recurFn(calcuated);
  }
  
  return recurFn(membershipId);
}

console.log(createCheckDigit("55555"));
```

### 6. Closures

Fix the bugs in the registerHandlers function. An alert should display anchor's zero-based index within a document instead of following the link.

For example, in the document below, the alert should display "2" when Google anchor is clicked since it is the third anchor element in the document and its zero-based index is 2.

```javascript
function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (let i = 0; i < as.length; i++) {
    as[i].onclick = function() {
      alert(i);
      return false;
    }
  }
}

/* HTML code for testing purposes (do not submit uncommented):
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/
```

### 7. Loop

Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.

For example, after appendChildren is executed, the following divs:

```javascript
function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("div");
  var allDivsSize = allDivs.length;
  
  for (var i = 0; i < allDivsSize; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);
```