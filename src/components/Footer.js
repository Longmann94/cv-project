import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
           <a href="https://github.com/Longmann94"> ©Long Mann {this.props.year}- Odin Project Assignment</a>
      </div>
    );
  }
}

export default Footer;
