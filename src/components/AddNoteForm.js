import React, { useState } from 'react'

const AddNoteForm = (props) => {
    const {  addFormData, _id, title : usersTitle, body : usersBody } = props

    const [ title, setTitle ] = useState(usersTitle ? usersTitle : '')
    const [ body, setBody ] = useState(usersBody ? usersBody : '')

    const [ titleErr, setTitleErr ] = useState({})

    const handleFormChange = (e) => {
        const { name, value } = e.target 
        if( name === 'title'){
            setTitle(value)
        }else{
            setBody(value)
        }
    }

    const formValidation = () => {
        const err = {}
        let isValid = true
        if(title.trim().length < 5){
            err.short = 'Title is too short'
            isValid = false
        }
        setTitleErr(err)
        return isValid
    }

    const submitHandle = (e) => {
        e.preventDefault()
        const formData = {
            title : title,
            body : body
        }
        const isValid = formValidation()
        if(isValid){
            addFormData(formData)
            setTitle('')
            setBody('')
        }
    }

    return (
        <div style={{ margin:'5px'}}>
            <form onSubmit={ submitHandle }>
                <input type="text" placeholder="Enter the title" name="title" value={ title } onChange={ handleFormChange }/> <br />
                {
                    Object.keys(titleErr).map((key,i) => {
                        return <div style={{ color:'red'}} key={i}>{ titleErr[key] }</div>
                    })
                }
                <br />
                <textarea  cols="30" rows="5" placeholder="Enter body of the notes" name="body" value={ body } onChange={ handleFormChange }></textarea> <br />
                <br />
                <input type="submit" value="save" />
            </form>
        </div>
    )
}

export default AddNoteForm 
