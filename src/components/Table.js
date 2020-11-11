import React from 'react'

const Table = ({element,type,platform}) => {
    return (
        <tr>
        <td data-label="Name"><a href={element}>{element}</a></td>
    <td data-label="Age">{platform}</td>
        <td data-label="Job">{type}</td>
      </tr>
    );
}

export default Table;