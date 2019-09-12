import React from "react";

export default function Square(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null
  //   };
  // }
  // render() {
  return (
    <div>
      <button className="square" onClick={() => this.props.onClick()}>
        {props.value}
      </button>
    </div>
  );
  // }
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
