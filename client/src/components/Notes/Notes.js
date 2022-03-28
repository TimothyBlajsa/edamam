import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotesList from '../Notes/NotesList';
import Search from '../Notes/Search';
import Header from '../Notes/Header';

const NotesApp = () => {
	const [notes, setNotes] = useState([
		{
			id: uuidv4(),
			title: "Note 1",
			body: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: uuidv4(),
			title: "Note 2",
			body: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: uuidv4(),
			title: "Note 3",
			body: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: uuidv4(),
			title: "Note 4",
			body: 'This is my new note!',
			date: '30/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	//const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title, body) => {
		const date = new Date();
		const newNote = {
			id: uuidv4(),
			title: title,
			body: body,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div>
			<div className='container'>
				<Header />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.title.toLowerCase().includes(searchText)
						
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default NotesApp;
