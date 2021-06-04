import React from 'react'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';


function CreateArea(props) {
    const [isExpended, setExpended] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''


    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });


    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function expand() {
        setExpended(true);
    }


    return (
        <div>
            <form className="create-note">
                {isExpended && (
                    <input name="title" value={note.title} onChange={handleChange} placeholder="title" />

                )}
                <textarea name="content" onClick={expand} value={note.content} onChange={handleChange} placeholder="take a note" rows={isExpended ? 3 : 1} />
                <Zoom in={isExpended}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea

