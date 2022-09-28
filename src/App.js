import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';
import uniqid from 'uniqid';


//const [item, setItem] = use.state;
//use effect syntx:
//useEffect(() => {}, [])

const App = () => {

    const [generalArr, setGeneralArr] = useState([]);
    const [generalInfo, setGeneralInfo] = useState({
      name: '',
      email: '',
      phone: '',
    });

    const handleNameInputChange = (e) => {
      e.persist();
      setGeneralInfo((values) => ({
        ...values,
        name: e.target.value,
      }));
    };

    const handleEmailInputChange = (e) => {
      e.persist();
      setGeneralInfo((values) => ({
        ...values,
        email: e.target.value,
      }));
    };

    const handlePhoneInputChange = (e) => {
      e.persist();
      setGeneralInfo((values) => ({
        ...values,
        phone: e.target.value,
      }));
    };

    const handleSubmitGeneralInfo = () => {
      setGeneralArr(
        [
          ...generalArr,
          {id: uniqid(), item: generalInfo}
        ]
      );
    }


    const [educationArr, setEducationArr] = useState([]);
    const [educationInfo, setEducationInfo] = useState({
      id: uniqid(),
      school: '',
      titleOfStudy: '',
      dateOfStudy: '',
    });

    const [practicalArr, setPracticalArr] = useState([]);
    const [practicalInfo, setPracticalInfo] = useState({
      id: uniqid(),
      company: '',
      position: '',
      title: '',
      dateOfWork: '',
      details: '',
    });

    return (
        <div className="main-container">
          <Header />
          <General generalArr={generalArr} />
        <div className="general-form">
          <h2>Enter your general information</h2>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name..." id="name" value={generalInfo.name} onChange={handleNameInputChange}/>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" placeholder="email..." id="email" value={generalInfo.email} onChange={handleEmailInputChange}/>
            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="text" placeholder="phone..." id="phone" value={generalInfo.phone} onChange={handlePhoneInputChange}/>
            <button onClick={handleSubmitGeneralInfo}>submit Info!</button>
          </div>
          </div>
        );
    }

    export default App;
