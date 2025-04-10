import React from 'react'
import Header from '../../components/Header'
import NoteForm from '../../components/NoteForm'
import NotesPanel from '../../components/NotesPanel'

export default function NotePage() {
    return (
        <>
            <Header>
                <p>User1</p>
            </Header>
            <div className="flex flex-rows justify-around py-8 px-4">
                <NoteForm />
                <NotesPanel />
            </div>
        </>
    )
}
