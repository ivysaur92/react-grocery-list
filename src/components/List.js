import React from 'react';
import Item from'./Item';

const List = ({name, items, handleClick }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        items.map( item => <Item key={item.id} {...item} handleClick={handleClick}/>)
      }
    </ul>
  </div>
)
export default List;