# React 1/3

```javascript
class ContactForm extends React.Component {
  state = {
    firstName: '',
    age: 0,
    email: '',
  }
  
  handleChange = ({target: {name, value}}) => {
  	this.setState((state, props) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
  	const { firstName, age, email } = this.state; 
    return <div>
       <div>
         <label htmlFor="firstName">FirstName:</label>
         <input
           type="text"
           name="firstName" 
           maxlength="100"
           value={firstName}
           onChange={this.handleChange} />
       </div>
       <div>
         <label htmlFor="age">Age:</label>
         <input 
           type="text"
           name="age" 
           maxlength="3"
           value={age} 
           onChange={this.handleChange} />
       </div>
       {age >=14 &&
         <div>
           <label htmlFor="email">Email:</label>
           <input 
             type="email" 
             name="email" 
             maxlength="100"
             value={email}
             onChange={this.handleChange} />
         </div>
       }
       
    </div>
  }
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<ContactForm />, rootElement);
```

# React 2/3

```javascript
class TabStrip extends React.Component {

  render() {
    return (
      <div className="TabStrip">
        {this.props.titles.map((title, index) => {
          const className = "TabStrip-title" +
            (this.isActive(index) ? " TabStrip-title-active" : "");

          return (
            <div onClick={() => this.setActiveIndex(index)} key={index} className={className}>
              {title}
            </div>
          );
        })}
      </div>
    );
  }

  isActive(index) {
    return index === this.getActiveIndex();
  }
  
  setActiveIndex(activeIndex) {
  	this.props.onActiveIndexChange(activeIndex);
  }
  
  getActiveIndex() {
  	return this.props.activeIndex;
  }
}

class App extends React.Component {
  state = { activeIndex: 1 };
  render() {
    return (<div>
      <TabStrip activeIndex={this.state.activeIndex}
        onActiveIndexChange={activeIndex => {
          this.setState({
            activeIndex
          });
        }}
        titles={["My account", "Settings", "Dashbboard"]} 
      />
    </div>);
  }
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# React 3/3

```javascript
function clickRedirectHandler(event) {

  event.preventDefault();
  
  const {target: { href }} = event;
  
  if(confirm(href)){
  	window.location.href = href;
  }
}

function setRedirectConfirmationDialogs() {
  const aTags = document.getElementsByTagName("a");
  [ ...aTags].forEach(obj => obj.addEventListener('click', clickRedirectHandler));
}
```

# ES6 1/2

```javascript
function validate(username) {
    // Write the code that goes here
    
    const namePattern = /^[A-Za-z][A-Za-z0-9+\-]{5,16}$/; 
    
    if(!namePattern.test(username)){
    	return false;
    }else if(username[username.length-1] !== '-'){
    	return false;
    }
    
}

console.log(validate('Mike-Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username
```

# ES6 2/2

```javascript
class Screen {  

	constructor(width, height){
		this._width = width;
    this._height = height;
  }
  
  set width(width){
  	this._width = width;
  }

  get diagonal() {
    return Math.sqrt(Math.pow(this._width, 2) + Math.pow(this._height, 2));
  }
  
  set dimensions(definition) {
    var dimensions = definition.split('x')
    this._width = parseInt(dimensions[0]);
    this._height = parseInt(dimensions[1]);
  }
}

var screen = new Screen(0, 0);
screen.dimensions = '500x300';
screen.width = 400;
console.log(screen.diagonal); // Should print 500
```

# php 1/3

```php
<?php
        //Enter your code here, enjoy!

$array = array("1" => "PHP code tester Sandbox Online",  
              "foo" => "bar", 5 , 5 => 89009, 
              "case" => "Random Stuff: " . rand(100,999),
              "PHP Version" => phpversion()
              );
              
foreach( $array as $key => $value ){
    echo $key."\t=>\t".$value."\n";
}
```

# php 2/3

```php
function sortByPriceAscending(string $jsonString) : string
{
    $jsonObject = json_decode($jsonString);
    usort($jsonObject, function($a, $b){
        if($a->price != $b->price){
            return $a->price > $b->price ? 1 : -1;
        }
        
        return $a->name > $b->name ? 1 : -1;
    } );
    return json_encode($jsonObject);
}

echo sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]');
```
















