import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <input type="text" onChange={evt => onChange(evt.target.value)} value={value}/>
  )
}