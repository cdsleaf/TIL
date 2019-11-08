# React Interview Questions

### 1. Focus

The TextInput component renders an input element in the DOM and accepts a ref that is forwarded to that input element. Finish the FocusableInput component:

 - The component should accept a focused prop.
 - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 - If on mounting the focused prop is true, the input should receive the focus.

 ```javascript
class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends React.Component {
  
  ref = React.createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true, 
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    if(prevProps.focused === false && this.props.focused === true){
      this.ref.current.focus();
    }
  }
  
  componentDidMount() {
    if(this.props.focused){
      this.ref.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false
};

const App = (props) => <FocusableInput focused={props.focused} />;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 ```

 ### 2. Todo List

 Write a TodoList component that expects an items prop, and a list of objects, each with text and done properties.

TodoList also accepts an onItemClick function prop, which should be called when a user clicks an item in the list, if the item is not marked as done. Otherwise, the onItemClick should not be called and the click event itself should not be propagated further. The function should be called with the item object from the items list as the first parameter and the event as the second parameter.

```javascript
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onClick, onItemClick } = this.props;
    return (
      <ul onClick={onClick}>
        {items.map((item, index) => 
          <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>
        )}
      </ul>
    );
  }
  
  handleItemClick(item, event) {
    event.stopPropagation();
    
    if(!item.done){
      this.props.onItemClick(item, event);
    }
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);
```

### 3. Change Username

This application should allow the user to update their username by inputting a custom value and clicking the button.

The Username component is finished and should not be changed, but the App component is missing parts. Finish the App component so that the Username component displays the inputted text when the button is clicked.

The App component should use the React.useRef Hook to pass the input to the Username component for the input element and for the Username component.

For example, if the user inputs a new username of "John Doe" and clicks the button, the div element with id root should look like this:

```html
<div><button>Change Username</button><input type="text"><h1>John Doe</h1></div>
```

```javascript
class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  const inputRef = React.useRef();
  const usernameRef = React.useRef();
  
  function clickHandler() {
    usernameRef.current.changeValue(inputRef.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text"ref={inputRef}/>
      <Username ref={usernameRef} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### 4. Grocery App

You have a GroceryApp class, which receives a list of products, each one with name and votes. The app should render an unordered list, with a list item for each product. Products can be upvoted or downvoted.

By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.

For example, passing the following array as products prop to GroceryApp [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }] and clicking the '+' button next to the Oranges should result in HTML like:

```javascript
const Product = props => {
	const { product, onVote } = props;
  const { name, votes } = product; 
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    onVote('+', name);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
     onVote('-', name);
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {

   // Finish writing the GroceryApp class
  state = {
  	 products: this.props.products.reduce((a,v) => {
     	return {
      	...a,
        [v.name]: v, 
      }
     }, {}),
  }
 
  onVote = (dir, index) => {
    // Update the products array accordingly ...
  	this.setState((state, props) => {
    	return {
      	...state,
        ['products']: {
        	...state['products'],
         	[index]: {
          	...state['products'][index],
            votes: dir === '+' 
            	? state['products'][index].votes+1 
              : state['products'][index].votes-1 
          } 
        }
      }
    });
  };

  render() {
  	const productsNames = Object.keys(this.state.products);
    const { products } = this.state;
    return (
      <ul>
        {productsNames.map(name => (
        	<Product 
            key={name} 
            product={products[name]}
            onVote={this.onVote}
          />
        ))}
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));
console.log(document.getElementById('root').innerHTML)
```