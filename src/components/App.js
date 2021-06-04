import React, { useState } from 'react';
import CreateArea from './createarea/CreateArea';
import Footer from './footer/Footer';
import Header from './header/Header';
import Note from './note/Note';



export const App = () => {
    const [notes, setNotes] = useState([]);

    function addNote(newNotes) {
        setNotes(prevNotes => {
            return [
                ...prevNotes, newNotes
            ];


        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })

    }


    return (
        <div>
            <Header />

            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    )
}

export default App;
