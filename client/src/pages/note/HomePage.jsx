import NoteForm from '../../components/note/NoteForm'
import NotesPanel from '../../components/note/NotesPanel'

export default function HomePage() {
    return (
        <div className="flex flex-rows justify-around py-8 px-4">
            <NoteForm />
            <NotesPanel />
        </div>
    )
}
