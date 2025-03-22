
import React,{ Component } from 'react';
import logo from'./logo.svg';
import './App.css';

import {Greet} from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import message from './Component/message';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';

import Form from './Component/Form';
class App extends Component{
  render() {
    return (
      <div className="App" >
        <Form />
        </div>
    );
  }
}











// class App extends Component {
//   render() {
//     return (
//       <div className="App" >
       
//         {/* <EventBind />
//         <FunctionClick />
//         <ClassClick />
//           < message />
//         <Greet name="siri" heroname="Batman">
//           <p>
//             This is a children props 
//           </p>
//         </Greet>

//         <Greet name="siri1" heroname="Superman">
//         <button>Action</button>
//         </Greet>
//         <Greet name="siri2" heroname="wonder women"/>
//          */}

//         < Welcome name="siri2" heroname="wonder women"/>
//         <Welcome name="siri2sfa" heroname="wonder women"/>
        
//         <Welcome name="sisfri2" heroname="wonder women"/>
//          <Welcome />
//           <Hello />
        
//       </div>

//     );
//   }
// }

export default App