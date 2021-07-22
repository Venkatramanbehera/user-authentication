import axios from 'axios'
import React from 'react'
import AddNoteForm from './AddNoteForm'

const EditNote = (props) => {
    const { _id, body, title, handleToggle, updateNote } = props

    const addFormData = (formData) => {
        // console.log(formData)
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((res) => {
            const result = res.data
            updateNote(result)
            handleToggle()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Edit Notes</h1>
            <AddNoteForm addFormData={ addFormData } _id={_id} body={body} title={title}/>
        </div>
    )
}

export default EditNote
