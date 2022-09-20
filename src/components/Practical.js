import React from 'react';

class Practical extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const practicalArr = this.props.practicalArr;
    const listItems = practicalArr.map((item) =>
      <div className="practical-content" key={item.id}>
      <div className="information-label">Company name:</div><div className="information-data">{item.company}</div>
      <div className="information-label">Position:</div><div className="information-data">{item.position}</div>
      <div className="information-label">Title:</div><div className="information-data">{item.title}</div>
      <div className="information-label">Date Commenced:</div><div className="information-data">{item.dateOfWork}</div>
      <div className="information-label">Details: </div><div className="information-data">{item.details}</div>
      </div>
  );

    return (
      <div className="practical-section">
      <div className="section-title"> Practical Experience: </div>
        {listItems}
      </div>
    );
  }
}

export default Practical;
