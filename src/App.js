import React, { component } from 'react';
import reactDOM from 'react-dom';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';


class App extends React.Component{
  constructor() {
    super();
  };

  render(){
    return (
        <div>
          <Header />
          <General />
          <Education />
          <Practical />
          <Footer />
        </div>
    );
  }


}

export default App;
