import React from 'react'

export default function NotesPanel() {
    return (
        <div className="flex-[.8]">
            <div className="flex justify-between py-4 border-b-3 border-back-100">
                <h2 className="font-bold text-back-100">Title</h2>
                <h2 className="font-bold text-back-100">Description</h2>
                <h2 className="flex-[.3] text-right font-bold text-back-100">
                    Action
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 py-4">
                <div className="flex flex-cols justify-between bg-back-100 p-4 rounded-md ">
                    <h2>Title</h2>
                    <p>Description</p>
                    <div>
                        <button className="py-1 px-5 bg-blue-900 text-back-100 rounded-xs mx-2">
                            Edit
                        </button>
                        <button className="py-1 px-5 bg-red-900 text-back-100 rounded-xs mx-2">
                            Delete
                        </button>
                    </div>
                </div>
                <div className="flex flex-cols justify-between bg-back-100 p-4 rounded-md">
                    <h2>Title</h2>
                    <p>Description</p>
                    <div>
                        <button className="py-1 px-5 bg-blue-900 text-back-100 rounded-xs mx-2">
                            Edit
                        </button>
                        <button className="py-1 px-5 bg-red-900 text-back-100 rounded-xs mx-2">
                            Delete
                        </button>
                    </div>
                </div>
                <div className="flex flex-cols justify-between bg-back-100 p-4 rounded-md">
                    <h2>Title</h2>
                    <p>Description</p>
                    <div>
                        <button className="py-1 px-5 bg-blue-900 text-back-100 rounded-xs mx-2">
                            Edit
                        </button>
                        <button className="py-1 px-5 bg-red-900 text-back-100 rounded-xs mx-2">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
