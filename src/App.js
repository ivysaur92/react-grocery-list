import React, { Component } from 'react';
import logo from './logo.svg';
 import './App.css';
import ItemForm from './components/ItemForm';
import List from './components/List';

class App extends Component {
  state = { 
    items: [
      {  id: 1, name: 'Chicken', price: '5.00', complete: true },
      {  id: 2, name: 'Potato', price: '1.00', complete: false },
      {  id: 3, name: 'Rice', price: '4.00', complete: false }
    ] 
  }

  getUniqId = () => {
    // NOTE We are just using this as a helper function 
    // for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (name, price) => {
    const { items } = this.state;
    const newItem = { id: this.getUniqId(), name, price, complete: false }
    this.setState({ items: [newItem, ...items]});
  }

  handleClick = (id) => {
    const { items } = this.state 
    this.setState({ 
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  render() {
    const { items } = this.state
    return (
      <div class = "text-primary">
        <ItemForm addItem={this.addItem} />
        <List name='Grocery List' items={items} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;