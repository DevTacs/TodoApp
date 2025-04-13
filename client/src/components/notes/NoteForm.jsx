import React from 'react'

export default function NoteForm() {
    return (
        <form className="flex flex-col w-[400px] p-4 bg-back-100 rounded-md shadow-xs shadow-back-100">
            <h2 className="my-4 text-2xl font-bold text-center text-font-800">
                ADD TODOS
            </h2>
            <div className="flex flex-col">
                <input
                    className="py-2 px-4 my-3 rounded-md text-font-800 text-sm placeholder-font-800 outline-0 border-1 border-font-800"
                    type="text"
                    name=""
                    id=""
                    placeholder="Title"
                />
                <textarea
                    className="h-[250px] py-2 px-4 my-3 rounded-md text-font-800 text-sm placeholder-font-800 outline-0 border-1 border-font-800"
                    name=""
                    id=""
                    placeholder="Description"></textarea>
            </div>
            <button className="my-3 py-2 px-4 bg-font-800 rounded-md text-sm cursor-pointer text-back-100">
                Submit
            </button>
        </form>
    )
}
