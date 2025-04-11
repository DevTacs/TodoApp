import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function NotesPanel() {
    return (
        <div className="flex-[.8]">
            <div className="flex justify-between py-4 border-b-3 border-back-100">
                <h2 className="font-bold text-back-100">Title</h2>
                <h2 className="font-bold text-back-100">Description</h2>
                <h2 className="flex-[.4] text-right font-bold text-back-100">
                    Action
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4">
                <div className="flex flex-cols justify-between bg-back-100 p-4 rounded-md ">
                    <h2>Title</h2>
                    <p>Description</p>
                    <div>
                        <Link to={`/notes/1`}>
                            <button className="py-2 px-5 bg-font-800 text-sm text-back-100 cursor-pointer rounded-xs mx-2">
                                View
                            </button>
                        </Link>
                        <button className="py-2 px-5 bg-blue-900 text-sm outline-0 text-back-100 cursor-pointer rounded-xs mx-2">
                            Edit
                        </button>
                        <button className="py-2 px-5 bg-red-900 text-sm text-back-100 cursor-pointer rounded-xs mx-2">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
