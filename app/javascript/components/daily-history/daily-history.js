import React from 'react';
import './daily-history.scss';

const DailyHistory = props => {
  console.log('&&&&&&&&&&&&');
  console.log(props);
  return (
    <div>
      <table>
        <thead>
          <th>Date</th>
          <th>Ate Food</th>
          <th>Drank Water</th>
          <th>Notes</th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default DailyHistory;
