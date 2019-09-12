import React from "react";

export default class Square extends React.Component {
  render() {
    return (
      <div>
        <button
          className="square"
          onClick={() => {
            alert("click");
          }}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

// import React, { Component } from 'react'

// export default class Square extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
