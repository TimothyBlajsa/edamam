import Note from './Note';
import AddNote from './AddNote';
import { v4 as uuidv4 } from 'uuid';
const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list' key={uuidv4()}>
			{notes.map((note) => (
				<Note
					id={note.id}
					title={note.title}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					key={uuidv4()}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;