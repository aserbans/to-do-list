import React,{ useState,useEffect } from 'react';
import CheckBoxButton from '../CheckBoxButton/CheckBoxButton.component';
import './ToDoForm.styles.scss';

const LOCAL_STORAGE_KEY = 'toDo-list';

const ToDoForm = ({id}) => {
	const [ value,setValue ] = useState('');
	const [ toDos,setToDos ] = useState([]);


	useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storeTodos){
      setToDos(storeTodos);
    }
  	}, [])
	useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  	}, [toDos]);

	const onChange = (event) => {
		event.preventDefault();
		setValue(event.target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		if(!value) return;
		setToDos([...toDos,{id:Date.now(),text:value}]);
		event.target.reset();
	}

	const removeToDo = (id) => {
    	setToDos(toDos.filter(toDo => toDo.id !== id));
  	}

  	const clearList = () => {
  		setToDos([]);
  	}

  	/*const updateToDo = ( text,id ) => {
  		toDos.map(toDo => {
  			if(toDo.id === id){
  				toDo.text = text;

  			}
  				
  		});
  		setToDos(toDos);
  	}*/

	return(
		<div className='toDoForm'>
			
			<form  onSubmit={onSubmit} >
				<input
					className = 'input'
					type = 'text'
					placeholder = 'Add a toDo..'
					class = 'input'
					onChange = { onChange }
				/>
				
			</form>
			<ul className = 'unorderedList'>
				{
					toDos.map((toDo) => (
						<li   className = 'listItem' key={toDo.id}>
							<CheckBoxButton  />
							{
								toDo.text
								
							}
							
							<button className = 'deleteButton' onClick={ () => removeToDo(toDo.id)}>X</button>
						</li>
							
					))
				}
			</ul>
			<button type='submit' className='clearButton' onClick = {clearList} >Clear</button>
		</div>
	);
}

export default ToDoForm;