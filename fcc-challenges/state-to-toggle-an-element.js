// Use State to Toggle an Element

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    // bind the this keyword to the method in the constructor

this.toggleVisibility = this.toggleVisibility.bind(this)


  }

  // There is a click handler on the button which triggers a class method called toggleVisibility(). 
  // Define this method so the state of visibility toggles to the opposite value when the method is called. 
  // If visibility is false, the method sets it to true, and vice versa.

  toggleVisibility(){ 
    if (this.state.visibility) {
      this.setState({
        visibility: false
    });
    } else {
        this.setState({
        visibility: true
      })
    }
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};