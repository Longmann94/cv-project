import React from 'react';
import reactDOM from 'react-dom';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';
import uniqid from 'uniqid';
import { Formik, Field, Form } from 'formik';


class App extends React.Component{
  constructor() {
    super();

    this.state = {
      generalArr: [],
      generalInfo: {
        id: uniqid(),
        name: '',
        email: '',
        phone: '',
      },

      educationArr: [],
      educationInfo: {
        id: uniqid(),
        school: '',
        titleOfStudy: '',
        dateOfStudy: '',
      },

      practicalArr: [],
      practicalInfo: {
        id: uniqid(),
        company: '',
        position: '',
        title: '',
        dateOfWork: '',
        details: '',
      },
    }

   this.handleInputChangeGeneralInfo = this.handleInputChangeGeneralInfo.bind(this);
   this.handleSubmitGeneralInfo = this.handleSubmitGeneralInfo.bind(this);

   this.handleInputChangeEducationInfo = this.handleInputChangeEducationInfo.bind(this);
   this.handleSubmitEducationInfo = this.handleSubmitEducationInfo.bind(this);

   this.handleInputChangePracticalInfo = this.handleInputChangePracticalInfo.bind(this);
   this.handleSubmitPracticalInfo = this.handleSubmitPracticalInfo.bind(this);

   this.handleEditLastEntryGeneral = this.handleEditLastEntryGeneral.bind(this);
   this.handleEditLastEntryEducation = this.handleEditLastEntryEducation.bind(this);
   this.handleEditLastEntryPractical = this.handleEditLastEntryPractical.bind(this);
  };

  handleInputChangeGeneralInfo(values){
    this.setState({
      generalInfo: {
        id: uniqid(),
        name: values.name,
        email: values.email,
        phone: values.phone,
      },
    });
  }

  handleSubmitGeneralInfo(){
     this.setState({
       generalArr: this.state.generalArr.concat(this.state.generalInfo),
       generalInfo: {
         id: uniqid(),
         name: '',
         email: '',
         phone: '',
       }
     });
  }

  handleEditLastEntryGeneral(){
    if(this.state.generalArr.length !== 0){
      const lastEntry = this.state.generalArr.pop();

    this.setState({
      generalArr: this.state.generalArr.slice(0, this.state.generalArr.length),
      generalInfo: {
        id: uniqid(),
        name: lastEntry.name,
        email: lastEntry.email,
        phone: lastEntry.phone,
      }
    });
  }
  }

  handleInputChangeEducationInfo(values){
    this.setState({
      educationInfo: {
        id: uniqid(),
        school: values.school,
        titleOfStudy: values.titleOfStudy,
        dateOfStudy: values.dateOfStudy,
      },
    });
  }

  handleSubmitEducationInfo(){
     this.setState({
       educationArr: this.state.educationArr.concat(this.state.educationInfo),
       educationInfo: {
         id: uniqid(),
         school: '',
         titleOfStudy: '',
         dateOfStudy: '',
       },
     });
  }

  handleEditLastEntryEducation(){
    if(this.state.educationArr.length !== 0){
      const lastEntry = this.state.educationArr.pop();

    this.setState({
      educationArr: this.state.educationArr.slice(0, this.state.educationArr.length),
      educationInfo: {
        id: uniqid(),
        school: lastEntry.school,
        titleOfStudy: lastEntry.titleOfStudy,
        dateOfStudy: lastEntry.dateOfStudy,
      }
    });
  }
  }

  handleInputChangePracticalInfo(values){
    this.setState({
      practicalInfo: {
        id: uniqid(),
        company: values.company,
        position: values.position,
        title: values.title,
        dateOfWork: values.dateOfWork,
        details: values.details,
      },
    });
  }

  handleSubmitPracticalInfo(){
     this.setState({
       practicalArr: this.state.practicalArr.concat(this.state.practicalInfo),
       practicalInfo: {
         id: uniqid(),
         company: '',
         position: '',
         title: '',
         dateOfWork: '',
         details: '',
       },
     });
  }

  handleEditLastEntryPractical(){
    if(this.state.practicalArr.length !== 0){
      const lastEntry = this.state.practicalArr.pop();

    this.setState({
      practicalArr: this.state.practicalArr.slice(0, this.state.practicalArr.length),
      practicalInfo: {
        id: uniqid(),
        company: lastEntry.company,
        position: lastEntry.position,
        title: lastEntry.title,
        dateOfWork: lastEntry.dateOfWork,
        details: lastEntry.details,
      }
    });
  }
  }


  render(){

    const { generalArr, generalInfo, educationArr, educationInfo, practicalArr, practicalInfo } = this.state;

    return (
        <div className="main-container">
          <Header />
          <General generalArr={generalArr}/>
        <div className="general-form">
          <h2>Enter your general information</h2>
              <Formik
               enableReinitialize = {true}
               initialValues={{
                name: generalInfo.name,
                email: generalInfo.email,
                phone: generalInfo.phone,
               }}
              onSubmit={async (values, {resetForm}) => {
                await this.handleInputChangeGeneralInfo(values);
                this.handleSubmitGeneralInfo();
                resetForm({ values: ''});
              }}
              >
              <Form>
               <label htmlFor="name">Name:</label>
               <Field id="name" name="name" placeholder="Name" />

               <label htmlFor="email">Email:</label>
               <Field id="email" name="email" placeholder="Email" />

                <label htmlFor="phone">Phone: </label>
                <Field id="phone" name="phone" placeholder="Phone number" />

                <button type="submit"> Add details</button>
                <button type="button" onClick={this.handleEditLastEntryGeneral}>Edit Last entry </button>
               </Form>
               </Formik>
          </div>
          <Education educationArr={educationArr}/>
          <div className="education-form">
            <h2>Enter your Education information</h2>
                <Formik
                  enableReinitialize = {true}
                  initialValues={{
                  school: educationInfo.school,
                  titleOfStudy: educationInfo.titleOfStudy,
                  dateOfStudy: educationInfo.dateOfStudy,
                }}
                onSubmit={async (values, {resetForm}) => {
                  await this.handleInputChangeEducationInfo(values);
                  this.handleSubmitEducationInfo();
                  resetForm({ values: ''});
                }}
                >
                <Form>
                 <label htmlFor="school">School:</label>
                 <Field id="school" name="school" placeholder="School Name" />

                 <label htmlFor="titleOfStudy">Title of Study:</label>
                 <Field id="titleOfStudy" name="titleOfStudy" placeholder="...Master of IT" />

                  <label htmlFor="dateOfStudy">Date of Study: </label>
                  <Field id="dateOfStudy" name="dateOfStudy" placeholder="Year Completed" />

                  <button type="submit"> Add details</button>
                  <button type="button" onClick={this.handleEditLastEntryEducation}>Edit Last entry </button>
                 </Form>
                 </Formik>
            </div>
          <Practical practicalArr={practicalArr}/>
          <div className="practical-form">
            <h2>Enter your Practical information</h2>
                <Formik
                  enableReinitialize = {true}
                  initialValues={{
                  company: practicalInfo.company,
                  position: practicalInfo.position,
                  title: practicalInfo.title,
                  dateOfWork: practicalInfo.dateOfWork,
                  details: practicalInfo.details,
                }}
                onSubmit={async (values, {resetForm}) => {
                  await this.handleInputChangePracticalInfo(values);
                  this.handleSubmitPracticalInfo();
                  resetForm({ values: ''});
                }}
                >
                <Form>
                 <label htmlFor="company">Company:</label>
                 <Field id="company" name="company" placeholder="Company name" />

                 <label htmlFor="position">Position:</label>
                 <Field id="position" name="position" placeholder="Position" />

                 <label htmlFor="title">Title: </label>
                 <Field id="title" name="title" placeholder="Title" />

                  <label htmlFor="dateOfWork">Date of Work: </label>
                  <Field id="dateOfWork" name="dateOfWork" placeholder="Start...End Date" />

                  <label htmlFor="details">Details: </label>
                  <Field id="details" name="details" placeholder="Details..." />

                  <button type="submit"> Add details</button>
                  <button type="button" onClick={this.handleEditLastEntryPractical}>Edit Last entry </button>
                 </Form>
                 </Formik>
            </div>
          <Footer />
        </div>
    );
  }


}

export default App;
