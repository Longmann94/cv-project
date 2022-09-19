import React, { Component } from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const generalArr = this.props.generalArr;
    const listItems = generalArr.map((item) =>
      <div className="general-content" key={item.id}>
      <li> {item.name} </li>
      <li> {item.email} </li>
      <li> {item.phone} </li>
      </div>
  );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default General;
