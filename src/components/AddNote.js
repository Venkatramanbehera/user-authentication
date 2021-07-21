import axios from 'axios'
import React, { useState } from 'react'

const AddNote = (props) => {
    const { addNote } = props

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    const handleFormChange = (e) => {
        const { name, value } = e.target 
        if( name === 'title'){
            setTitle(value)
        }else{
            setBody(value)
        }
    }

    const submitHandle = (e) => {
        e.preventDefault()
        const formData = {
            title : title,
            body : body
        }
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        }).then((response) => {
            addNote(response.data)
            setTitle('')
            setBody('')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div style={{ margin:'50px'}}>
            <h1> Add Note </h1>
            <form onSubmit={ submitHandle }>
                <input type="text" placeholder="Enter the title" name="title" value={ title } onChange={ handleFormChange }/> <br />
                <br />
                <textarea  cols="30" rows="5" placeholder="Enter body of the notes" name="body" value={ body } onChange={ handleFormChange }></textarea> <br />
                <br />
                <input type="submit" value="save" />
            </form>
        </div>
    )
}

export default AddNote
