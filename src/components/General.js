import React from 'react';

const General = ({ generalArr }) => {
  
   const listItems = generalArr.map(item => {
    return <div className="general-content" key={item.id}>
     <div className="information-label">Name:</div><div className="information-data">{item.item.name}</div>
     <div className="information-label">Email:</div><div className="information-data">{item.item.email}</div>
     <div className="information-label">Phone:</div><div className="information-data">{item.item.phone}</div>
     </div>;
 });

    return (
      <div className="general-section">
      <div className="section-title"> General Information: </div>
      {listItems}
      </div>
    );

}

export default General;
