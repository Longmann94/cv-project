import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const generalArr = this.props.generalArr;
    const listItems = generalArr.map((item) =>
      <div className="general-content" key={item.id}>
      <div className="information-label">Name:</div><div className="information-data">{item.name}</div>
      <div className="information-label">Email:</div><div className="information-data">{item.email}</div>
      <div className="information-label">Phone:</div><div className="information-data">{item.phone}</div>
      </div>
  );

    return (
      <div className="general-section">
      <div className="section-title"> General Information: </div>
        {listItems}
      </div>
    );
  }
}

export default General;
