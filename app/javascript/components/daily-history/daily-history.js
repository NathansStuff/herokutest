import React from 'react';
import './daily-history.scss';

const DailyHistory = props => {

  const history = props.attributes.data
  const list = history ? history.map(history => {
    console.log('&&&&***')
    console.log(history)
    return (
        <tr>
            <td>{history.id}</td>


            </tr>
        );
  }) : null;
  return (
    <div>
      <table>
        <thead>
          <th>Date</th>
          <th>Ate Food</th>
          <th>Drank Water</th>
          <th>Notes</th>
        </thead>
        <tbody>
{list}
        </tbody>
      </table>
    </div>
  );
};

export default DailyHistory;
