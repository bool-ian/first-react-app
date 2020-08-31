import React, { Component } from "react";
import './App.css';
class Recipes extends Component {
  render() {
    return (
      <div>
        <h2 style={{textAlign: "center"}}>RECIPES</h2>
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

export default Recipes;