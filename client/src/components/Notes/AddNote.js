import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [noteTitle, setNoteTitle] = useState('')
	const characterLimit = 200;
	const titleCharacterLimit = 22;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};
	const handleTitleChange = (e) => {
		if (titleCharacterLimit - e.target.value.length >= 0) {
			setNoteTitle(e.target.value);
		}
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteTitle,noteText);
			setNoteText('');
		}
	};
	

	return (
		<div className='note new'>
			<textarea
				rows='1'
				cols='22'
				placeholder='Add a title'
				value={noteTitle}
				onChange={handleTitleChange}
				></textarea>
			<textarea
				rows='8'
				cols='22'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;