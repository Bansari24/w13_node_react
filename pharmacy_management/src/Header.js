import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "Bansari" };
  }

  changeName = a => {
    this.setState({ username: a });
  };

  render() {
    return (
      <header style={{ backgroundColor: "Steelblue", padding: "10px" }}>
        <img src="logo512.png" alt="some logo" style={{ width: "50px" }}></img>
        <h2>Welcome {this.state.username} to Party events</h2>
        <input type="text" name="yourname" id="yourname"></input>
        <button
          onClick={() =>
            this.changeName(document.getElementById("yourname").value)
          }
        >
          Change the Name
        </button>
      </header>
    );
  }
}
export default Header;
