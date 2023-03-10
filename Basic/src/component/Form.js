import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      time: ""
    };
  }
  changeHandle = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  senddata = (e) => {
        let payload = {
            name: this.state.name,
            time: new Date()
        }
        console.log(payload)
  }
  render() {
    return (
      <div>
        <form
          onSubmit={() => {
            alert(this.state.name);
            // e.preventDefault()
          }}
        >
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeHandle}
          />
          <input type="submit" value="submit"  onClick={this.senddata} />
        </form>
        {/* {this.name} */}
      </div>
    );
  }
}

export default Form;
