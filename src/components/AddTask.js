import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    newTask: "",
    }
  render() { 
    return ( 
      <p>Dodaj zadanie</p>
     );
  }
}
 
export default AddTask;