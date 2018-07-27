// Bind 'this' to a Class Method
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. 
    this.addItem = this.addItem.bind(this)
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* add a click handler to the button element in the render method */ }
        <button onClick = {this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};