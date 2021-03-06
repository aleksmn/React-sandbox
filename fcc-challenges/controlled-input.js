class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this)

  }
  // Create a method called handleChange() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component's state with this new string.

   handleChange(event){
     this.setState({
        input: event.target.value
     });
   }

  render() {
    return (
      <div>
        { /* Add a value attribute which is equal to the input property of the component's state. Then add an onChange() event handler set to the handleChange() method.*/}
        <input value= {this.state.input} onChange = {this.handleChange} />
        { /* When you type in the input box, that text is processed by the handleChange() method, set as the input property in the local state, and rendered as the value in the input box on the page. The component state is the single source of truth regarding the input data.*/}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};