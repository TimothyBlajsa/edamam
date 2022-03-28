import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteBody, setNoteBody] = useState('');
	const [noteTitle, setNoteTitle] = useState('')
	const characterLimit = 200;
	const titleCharacterLimit = 22;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteBody(event.target.value);
		}
	};
	const handleTitleChange = (e) => {
		if (titleCharacterLimit - e.target.value.length >= 0) {
			setNoteTitle(e.target.value);
		}
	}

	const handleSaveClick = () => {
		if (noteBody.trim().length > 0) {
			handleAddNote(noteTitle, noteBody);
			setNoteBody('');
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
				value={noteBody}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteBody.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;