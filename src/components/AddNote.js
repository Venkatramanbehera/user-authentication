import React from 'react'
import AddNoteForm from './AddNoteForm'

import axios from 'axios'

const AddNote = (props) => {
    const { addNote } = props

    const addFormData = (formData) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        }).then((response) => {
            addNote(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Add Note</h1>
            <AddNoteForm addFormData={ addFormData }/>
        </div>
    )
}

export default AddNote
