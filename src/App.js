import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet'
import welcome from './Components/welcome';
import Form from './Components/Form';
import ValidatedForm from './Components/ValidatedForm';
import SimpleForm from './Components/SimpleForm';
import SurveyForm from './Components/SurveyForm';
class App extends Component{
  render() {
    return (
      <div className="App" >
         <Greet />
         <welcome />
        <Form />
        <br></br>
        <SimpleForm /><br></br>
        <SurveyForm /><br></br>
        <ValidatedForm /><br></br>
        </div>
    );
  }
}


export default App