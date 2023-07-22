import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    mobile: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""|| this.state.mobile === "") {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", mobile:"" });
  };
  render() {
    return (
      <div>
        <h2 style={{color:"orange"}}>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label style={{color:'DodgerBlue'}}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"

              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label style={{color:'DodgerBlue'}}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"

              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <div className="field">
            <label style={{color:'DodgerBlue'}}>Mobile</label>
            <input
              type="tel"
              name="text"
              placeholder="Mobile Number"
              pattern="[7-9]{1}[0-9]{9}"
              
              value={this.state.mobile}
              onChange={(e) => this.setState({ mobile: e.target.value })}
            />
          </div>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
