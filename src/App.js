import React from 'react';
import ToDoForm from './ToDoForm/ToDoForm.component';
import './App.css';
import Particles from 'react-particles-js';


function App({clearList}) {
  
  const particleOptions = {
	  particles:{
	        number: {
	          value: 100,
	          density: {
	            enable: true,
	            value_area: 500
	          }
	        }
	  }
	}

	


  	return (
    <div className="App">
      <Particles className='particles'
                  params={particleOptions}
       /> 
      <h1 className='title'>ToDo's List</h1>
      <ToDoForm clearList = {clearList} />
      
    </div>
  );
}

export default App;
