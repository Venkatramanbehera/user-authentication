import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import MyNoteList from './MyNoteList'

const MyNotesContainer = (props) => {
    const [ notes, setNotes ] = useState([])

    const addNote = (note) => {
        const result = [ note, ...notes]
        setNotes(result)
    }

    const removeNote = (note) => {
        const result = notes.filter((n) => {
            return n._id !== note._id
        })
        setNotes(result)
    }

    const updateNote = (note) => {
        const result = notes.map((n) => {
            if(n._id === note._id){
                return {...note}
            }else{
                return {...n}
            }
        })
        setNotes(result)
    }

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        }).then((response) => {
            setNotes(response.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div style={{ display:'inline-flex', justifyContent:'space-around',width:'100%'}}>
                <MyNoteList notes={ notes } removeNote={ removeNote } updateNote={ updateNote }/>
                <AddNote addNote={ addNote }/>
        </div>
    )
}

export default MyNotesContainer