import {Link, useParams} from 'react-router-dom'

export default function NoteModal() {
    const {id} = useParams()

    return (
        <div className="w-[400px] mt-[50px] mx-auto p-4 rounded-md text-font-800 bg-back-100">
            <h2 className="text-2xl font-bold m-4 text-center">Title</h2>
            <div>
                <p className="h-[250px] my-8 font-bold">Description </p>
                <p></p>
            </div>
            <div>
                <Link to={`/notes`}>
                    <button className="py-2 px-4 text-back-100 bg-font-800 rounded-md cursor-pointer">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}
