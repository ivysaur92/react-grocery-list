import React, { Component } from 'react';

class ItemForm extends Component {
  state = { name: '', price: ''}

  handleChange = (e) => {
    const { name, price, value } = e.target
    this.setState({ [name]: value })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.price)
    this.setState({ name: '', price: ''})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input 
        required 
        placeholder='add Grocery Item' 
        name="name" 
        value={this.state.name}
        onChange={this.handleChange}
        />
        <br />
         <input  
         required
        placeholder='add price (optional)' 
        name="price" 
        value={this.state.price}
        onChange={this.handleChange}
        />
        <br />
        <input class = "btn btn-primary" type = "submit" value = "Add" />
      </form>
    )
  }
}

export default ItemForm;