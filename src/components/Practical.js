import React from 'react';

const Practical = ({ practicalArr }) => {

   const listItems = practicalArr.map(item => {
    return <div className="practical-content" key={item.id}>
     <div className="information-label">Company:</div><div className="information-data">{item.item.company}</div>
     <div className="information-label">Position:</div><div className="information-data">{item.item.position}</div>
     <div className="information-label">Title:</div><div className="information-data">{item.item.title}</div>
     <div className="information-label">Date of work:</div><div className="information-data">{item.item.dateOfWork}</div>
     <div className="information-label">Details:</div><div className="information-data">{item.item.details}</div>
     </div>;
 });

    return (
      <div className="practical-section">
      <div className="section-title"> Practical Information: </div>
      {listItems}
      </div>
    );

}


export default Practical;
