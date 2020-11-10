import React from 'react';

function TableItem(props) {
  // Correct! There is no need to specify the key here:
  return <tr><td width={10}><b>{props.index}</b></td><td >{props.country.name}</td><td>{props.country.code}</td></tr>;
}

function TableList(props) {
 // console.log(props.countries)
  var countries = props.countries;
  const tableItems = countries.map((countries, index) =>
    // Correct! Key should be specified inside the array.
    <TableItem key={countries.id} index={index + 1}
      country={countries} />
  );
  return (

  
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          < th colSpan={3}>Countires</th>

        </tr>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody id="myTable">
        {tableItems}
      </tbody>
    </table>
   
  );
}

export default TableList