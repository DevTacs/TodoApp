import NoteForm from '../../components/notes/NoteForm'
import NotesPanel from '../../components/notes/NotesPanel'

export default function HomePage() {
    return (
        <div className="flex flex-rows justify-around py-8 px-4">
            <NoteForm />
            <NotesPanel />
        </div>
    )
}
