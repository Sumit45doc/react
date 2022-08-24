import React, { Component } from "react";

class RefForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    this.inputRef = React.createRef();
  }
  changleHandle(e) {
    this.setState({
      name: e.target.value,
    });
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            // console.log(this.state.name);
            console.log(this.inputRef.current.value);
            // console.log(this.inputRef.current.innerHTML);
            e.preventDefault();
          }}
          method="GET"
        >
          <input
            type="text"
            name=""
            id=""
            value={this.state.name}
            onChange={this.changleHandle.bind(this)}
            ref={this.inputRef}
          />
          {/* <div>
            <label htmlFor="pro">
              Email <input type="tel" maxLength="10" name="" id="pro" ref={this.inputRef} />
            </label>
          </div> */}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default RefForm;
