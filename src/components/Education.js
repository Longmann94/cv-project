import React from 'react';

const Education = ({ educationArr }) => {

   const listItems = educationArr.map(item => {
    return <div className="education-content" key={item.id}>
     <div className="information-label">School:</div><div className="information-data">{item.item.school}</div>
     <div className="information-label">Title of Study:</div><div className="information-data">{item.item.titleOfStudy}</div>
     <div className="information-label">Year completed:</div><div className="information-data">{item.item.dateOfStudy}</div>
     </div>;
 });

    return (
      <div className="education-section">
      <div className="section-title"> Education Information: </div>
      {listItems}
      </div>
    );

}

export default Education;
