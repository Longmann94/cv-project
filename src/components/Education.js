import React, { Component } from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const educationArr = this.props.educationArr;
    const listItems = educationArr.map((item) =>
      <div className="education-content" key={item.id}>
      <li> {item.school} </li>
      <li> {item.titleOfStudy} </li>
      <li> {item.dateOfStudy} </li>
      </div>
  );

    return (
      <div className="education-section">
        {listItems}
      </div>
    );
  }
}

export default Education;
