import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';
import uniqid from 'uniqid';


const App = () => {

    const year = new Date().getFullYear();

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

      setGeneralInfo(() => ({
        name: '',
        email: '',
        phone: '',
      }));
    };

    const handleEditGeneralInfo = () => {

      if(generalArr.length > 0){
        const arrItem = generalArr[generalArr.length - 1];
      setGeneralInfo(() => ({
        name: arrItem.item.name,
        email: arrItem.item.email,
        phone: arrItem.item.phone,
      }));
    }

      setGeneralArr([
        ...generalArr.slice(0, generalArr.length - 1)
      ]
      );
    };


    const [educationArr, setEducationArr] = useState([]);
    const [educationInfo, setEducationInfo] = useState({
      id: uniqid(),
      school: '',
      titleOfStudy: '',
      dateOfStudy: '',
    });

    const handleSchoolInputChange = (e) => {
      e.persist();
      setEducationInfo((values) => ({
        ...values,
        school: e.target.value,
      }));
    };

    const handleStudyInputChange = (e) => {
      e.persist();
      setEducationInfo((values) => ({
        ...values,
        titleOfStudy: e.target.value,
      }));
    };

    const handleDateInputChange = (e) => {
      e.persist();
      setEducationInfo((values) => ({
        ...values,
        dateOfStudy: e.target.value,
      }));
    };

    const handleSubmitEducationInfo = () => {

      setEducationArr(
        [
          ...educationArr,
          {id: uniqid(), item: educationInfo}
        ]
      );
    };

    const handleEditEducationInfo = () => {

      if(educationArr.length > 0){
        const arrItem = educationArr[educationArr.length - 1];
      setEducationInfo(() => ({
        school: arrItem.item.school,
        titleOfStudy: arrItem.item.titleOfStudy,
        dateOfStudy: arrItem.item.dateOfStudy,
      }));
    }

      setEducationArr([
        ...educationArr.slice(0, educationArr.length - 1)
      ]
      );
    };

    const [practicalArr, setPracticalArr] = useState([]);
    const [practicalInfo, setPracticalInfo] = useState({
      id: uniqid(),
      company: '',
      position: '',
      title: '',
      dateOfWork: '',
      details: '',
    });

    const handleCompanyInputChange = (e) => {
      e.persist();
      setPracticalInfo((values) => ({
        ...values,
        company: e.target.value,
      }));
    };

    const handlePositionInputChange = (e) => {
      e.persist();
      setPracticalInfo((values) => ({
        ...values,
        position: e.target.value,
      }));
    };

    const handleTitleInputChange = (e) => {
      e.persist();
      setPracticalInfo((values) => ({
        ...values,
        title: e.target.value,
      }));
    };

    const handleDateOfWorkInputChange = (e) => {
      e.persist();
      setPracticalInfo((values) => ({
        ...values,
        dateOfWork: e.target.value,
      }));
    };

    const handleDetailsInputChange = (e) => {
      e.persist();
      setPracticalInfo((values) => ({
        ...values,
        details: e.target.value,
      }));
    };

    const handleSubmitPracticalInfo = () => {

      setPracticalArr(
        [
          ...practicalArr,
          {id: uniqid(), item: practicalInfo}
        ]
      );
    };

    const handleEditPracticalInfo = () => {

      if(practicalArr.length > 0){
        const arrItem = practicalArr[practicalArr.length - 1];
      setPracticalInfo(() => ({
        company: arrItem.item.company,
        position: arrItem.item.position,
        title: arrItem.item.title,
        dateOfWork: arrItem.item.dateOfWork,
        details: arrItem.item.details,
      }));
    }

      setPracticalArr([
        ...practicalArr.slice(0, practicalArr.length - 1)
      ]
      );
    };

    return (
        <div className="main-container">
          <Header />
          <General generalArr={generalArr} />
            <div className="general-form">
            <h2>Enter your general information</h2>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name..." value={generalInfo.name} onChange={handleNameInputChange}/>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" placeholder="email..." value={generalInfo.email} onChange={handleEmailInputChange}/>
            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="text" placeholder="phone..." value={generalInfo.phone} onChange={handlePhoneInputChange}/>
            <button onClick={handleSubmitGeneralInfo}>submit Info!</button>
            <button onClick={handleEditGeneralInfo}>edit last entry</button>
          </div>

         <Education educationArr={educationArr} />
          <div className="education-form">
          <h2>Enter your Education information</h2>
            <label htmlFor="school">School:</label>
            <input id="school" type="text" placeholder="School..." value={educationInfo.school} onChange={handleSchoolInputChange}/>
            <label htmlFor="email">Email:</label>
            <input id="titleOfStudy" type="text" placeholder="bacholor of ..."  value={educationInfo.titleOfStudy} onChange={handleStudyInputChange}/>
            <label htmlFor="phone">Phone:</label>
            <input id="dateOfStudy" type="text" placeholder="year completed..." value={educationInfo.dateOfStudy} onChange={handleDateInputChange}/>
            <button onClick={handleSubmitEducationInfo}>submit Info!</button>
            <button onClick={handleEditEducationInfo}>edit last entry</button>
          </div>

          <Practical practicalArr={practicalArr} />
           <div className="practical-form">
           <h2>Enter your Practical information</h2>
             <label htmlFor="company">Company:</label>
             <input id="company" type="text" placeholder="Company..." value={practicalInfo.company} onChange={handleCompanyInputChange}/>
             <label htmlFor="position">Position:</label>
             <input id="position" type="text" placeholder="CEO..."  value={practicalInfo.position} onChange={handlePositionInputChange}/>
             <label htmlFor="title">Title:</label>
             <input id="title" type="text" placeholder="Lead Tester..." value={practicalInfo.title} onChange={handleTitleInputChange}/>
             <label htmlFor="dateOfWork">Date of Work:</label>
             <input id="dateOfWork" type="text" placeholder="2020...Present" value={practicalInfo.dateOfWork} onChange={handleDateOfWorkInputChange}/>
             <label htmlFor="details">Details:</label>
             <input id="dateOfStudy" type="text" placeholder="details of work..." value={practicalInfo.details} onChange={handleDetailsInputChange}/>
             <button onClick={handleSubmitPracticalInfo}>submit Info!</button>
             <button onClick={handleEditPracticalInfo}>edit last entry</button>
           </div>
           <Footer year={year}/>

          </div>
        );
    }

    export default App;
