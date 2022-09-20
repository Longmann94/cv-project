import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const educationArr = this.props.educationArr;
    const listItems = educationArr.map((item) =>
      <div className="education-content" key={item.id}>
      <div className="information-label">School:</div><div className="information-data">{item.school}</div>
      <div className="information-label">Title of Study:</div><div className="information-data">{item.titleOfStudy}</div>
      <div className="information-label">Year of Completion:</div><div className="information-data">{item.dateOfStudy}</div>
      </div>
  );

    return (
      <div className="education-section">
      <div className="section-title"> Education Information: </div>
        {listItems}
      </div>
    );
  }
}

export default Education;
