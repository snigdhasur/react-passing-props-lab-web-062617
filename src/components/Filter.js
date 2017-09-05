import React from 'react';

const Filter = (props) => {

  Filter.defaultProps = {
    filters: props.filters,
    handleChange: props.handleChange
  }


  return(
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    )}

export default Filter;
