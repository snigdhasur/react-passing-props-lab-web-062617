import React from 'react';


const FilteredFruitList = (props) => {

  FilteredFruitList.defaultProps = {
    fruit: props.fruit,
    filter: props.currentFilter,
  }



  const list = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  return(

      <ul className="fruit-list">
        {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
      </ul>
    )}

export default FilteredFruitList;
