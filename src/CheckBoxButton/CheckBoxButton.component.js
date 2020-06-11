import React,{ useState } from 'react';

const CheckBoxButton = () => {

	const [ isChecked,setIsChecked ] = useState(false);

	const toggleCheckBoxButton = () => {
		const newIsChecked = !isChecked;
		setIsChecked(newIsChecked);
	} 

	return(

		<div className = 'checkbox'>
			<input
				className = 'toEdit'
				type = 'checkbox'
				checked = {isChecked}
				onChange = {toggleCheckBoxButton}
			/>
		</div>
	);
}


export default CheckBoxButton;