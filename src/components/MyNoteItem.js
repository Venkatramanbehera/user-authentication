import axios from 'axios'
import React, { useState } from 'react'

import swal from 'sweetalert'
import EditNote from './EditNote'

const MyNoteItem = (props) => {
    const {  _id, title, removeNote, body, updateNote } = props

    const [ toggle, setToggle ] = useState(false)

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

    const handleToggle = () => {
        setToggle(!toggle)
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
            {
                toggle ? (
                    <React.Fragment>
                        <EditNote _id={_id} body={ body } title = { title } handleToggle={ handleToggle } updateNote={ updateNote }/>
                        <button onClick={ handleToggle }>cancel</button>
                    </React.Fragment>
                ) : ( 
                        <React.Fragment>
                            <h1 onClick={ handleItem }>{ title }</h1>
                            <button onClick={ handleToggle }>Edit</button>
                            <button onClick={ handleRemove }>Remove</button>
                        </React.Fragment>
                    )
            }
            
        </div>
    )
}

export default MyNoteItem
