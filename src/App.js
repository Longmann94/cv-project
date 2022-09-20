import React, { component } from 'react';
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
     });
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
     });
  }


  render(){

    const { generalArr, generalInfo, lastGeneral, educationArr, educationInfo, practicalArr, practicalInfo } = this.state;

    return (
        <div className="main-container">
          <Header />
          <General generalArr={generalArr}/>
        <div className="general-form">
          <h2>Enter your general information</h2>
              <Formik
               enableReinitialize = {true}
              initialValues={{
                name: generalInfo.email,
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
               <Field id="name" name="name" placeholder="name" />

               <label htmlFor="email">Email:</label>
               <Field id="email" name="email" placeholder="email" />

                <label htmlFor="phone">Phone: </label>
                <Field id="phone" name="phone" placeholder="phone" />
                <button type="submit"> Add details</button>
                <button type="button" onClick={this.handleEditLastEntryGeneral}>Edit Last entry </button>
               </Form>
               </Formik>
          </div>
          <Education educationArr={educationArr}/>
          <div className="education-form">
            <h2>Enter your Education information</h2>
                <Formik
                initialValues={{
                  school: '',
                  titleOfStudy: '',
                  dateOfStudy: '',
                }}
                onSubmit={async (values) => {
                  await this.handleInputChangeEducationInfo(values);
                  this.handleSubmitEducationInfo();
                }}
                >
                <Form>
                 <label htmlFor="school">School:</label>
                 <Field id="school" name="school" placeholder="school" />

                 <label htmlFor="titleOfStudy">Title of Study:</label>
                 <Field id="titleOfStudy" name="titleOfStudy" placeholder="titleOfStudy" />

                  <label htmlFor="dateOfStudy">Date of Study: </label>
                  <Field id="dateOfStudy" name="dateOfStudy" placeholder="dateOfStudy" />
                  <button type="submit"> Add details</button>
                 </Form>
                 </Formik>
            </div>
          <Practical practicalArr={practicalArr}/>
          <div className="practical-form">
            <h2>Enter your Practical information</h2>
                <Formik
                initialValues={{
                  company: '',
                  position: '',
                  title: '',
                  dateOfWork: '',
                  details: '',
                }}
                onSubmit={async (values) => {
                  await this.handleInputChangePracticalInfo(values);
                  this.handleSubmitPracticalInfo();
                }}
                >
                <Form>
                 <label htmlFor="company">Company:</label>
                 <Field id="company" name="company" placeholder="company" />

                 <label htmlFor="position">Position:</label>
                 <Field id="position" name="position" placeholder="position" />

                 <label htmlFor="title">Title: </label>
                 <Field id="title" name="title" placeholder="title" />

                  <label htmlFor="dateOfWork">Date of Work: </label>
                  <Field id="dateOfWork" name="dateOfWork" placeholder="dateOfWork" />

                  <label htmlFor="details">Details: </label>
                  <Field id="details" name="details" placeholder="details" />
                  <button type="submit"> Add details</button>
                 </Form>
                 </Formik>
            </div>
          <Footer />
        </div>
    );
  }


}

export default App;
