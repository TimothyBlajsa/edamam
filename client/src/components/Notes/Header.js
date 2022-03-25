import React from 'react';
import '../../components/form-data.css';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1 className='header__head-text'>Upload your own Recipes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;