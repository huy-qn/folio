import React, { Component } from 'react';
import firebase from './firebase.js';

class NewTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      uid: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const holdingsRef = firebase.database().ref('holdings_data');
    const item = {
      title: this.state.text,
      uid: this.props.data.data.user.uid
    }

    holdingsRef.push(item);

    this.setState({
      text: '',
      uid: ''
    })
  }
  render() {
   if(!this.props.data.data.user) {
     return (
       <div>...</div>
     )
   }
   console.log(this.props)
   return (
      <div>
        Add New Transaction

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder={this.props.data.data.user.email}
            onChange={this.handleChange}
            value={this.state.text}
            />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default NewTransaction;
