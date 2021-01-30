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
          <tr>Date</tr>
          <tr>Ate Food</tr>
          <tr>Drank Water</tr>
          <tr>Notes</tr>
        </thead>
        <tbody>
{list}
        </tbody>
      </table>
    </div>
  );
};

export default DailyHistory;
