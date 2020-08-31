import React, { Component } from "react";
import './App.css';
class Blogs extends Component {
  render() {
    return (
      <div>
        <h2 style={{textAlign: "center"}}>BLOGS</h2>
        <form>
          <fieldset>
            <p>
              <label>Text Area</label>
              <textarea id = "myTextArea"
                  rows = "20"
                  cols = "80">Your text here</textarea>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Blogs;