import axios from 'axios'
import React from 'react'

import swal from 'sweetalert'

const MyNoteItem = (props) => {
    const {  _id, title, removeNote } = props

    const handleRemove = () => {
        const con =window.confirm('Are you sure')
        if(con){
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
                headers : {
                    'x-auth' : localStorage.getItem('token')
                }
            })
            .then((response) => {
                removeNote(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const handleItem = () => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const { title, body } = response.data
            swal( title, body)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 onClick={ handleItem }>{ title }</h1>
            <button onClick={ handleRemove }>Remove</button>
        </div>
    )
}

export default MyNoteItem
