import React from 'react';
import './daily-history.scss';


// const DailyHistory = props => {
//   return <div></div>
// }
//   export default DailyHistory;


const DailyHistory = props => {
  console.log(props.attributes);
  console.log('&&&&&&&');

  const history = props.attributes;
  const list = history
    ? history.map(history => {
        
      const ate_food = history.attributes.ate_food === true ? '✅' : '❌';
      const drank_water = history.attributes.drank_water === true ? '✅' : '❌';
      
      return (
          <tr>
            <th>{history.attributes.weight}</th>
            <th>{ate_food}</th>
            <th>{drank_water}</th>
            <th>{history.attributes.notes}</th>
            </tr>
        );
      })
    : null;

  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Ate Food</th>
          <th>Drank Water</th>
          <th>Notes</th>
          </tr>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default DailyHistory;
