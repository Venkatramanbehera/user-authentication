import React from 'react'
import MyNoteItem from './MyNoteItem'

const MyNoteList = (props) => {
    const { notes, removeNote } = props
    return (
        <div style={{ margin:'50px'}}>
            <h1>My Notes</h1>
            {
                notes.length !== 0 ? (
                    notes.map((note) => {
                        return <MyNoteItem {...note} key={ note._id} removeNote={removeNote}/>
                    })
                ) : (
                    <div>
                        <h1> No notes are present</h1>
                        <p> Add new note</p>
                    </div>
                )
            }
        </div>
    )
}

export default MyNoteList
