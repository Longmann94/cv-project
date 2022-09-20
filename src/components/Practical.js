import React, { Component } from 'react';

class Practical extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const practicalArr = this.props.practicalArr;
    const listItems = practicalArr.map((item) =>
      <div className="practical-content" key={item.id}>
      <li> {item.company} </li>
      <li> {item.position} </li>
      <li> {item.title} </li>
      <li> {item.dateOfWork} </li>
      <li> {item.details} </li>
      </div>
  );

    return (
      <div className="practical-section">
        {listItems}
      </div>
    );
  }
}

export default Practical;
