import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateNotes from "./CreateNotes";

function App() {
    // Load notes from localStorage initially
    const [notes, createNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    // Save notes to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function addNote(newNote) {
        createNotes(oldNotes => [...oldNotes, newNote]);
    }

    function removeNote(id) {
        createNotes(oldNotes => {
            const updatedNotes = oldNotes.filter((noteContent, index) => index !== id);
            return updatedNotes;
        });
    }

    return (
        <div>
            <Header />
            <CreateNotes add={addNote} />
            {notes.map((noteContent, index) => (
                <Note
                    key={index}
                    id={index}
                    heading={noteContent.heading}
                    text={noteContent.text}
                    onDelete={removeNote}
                />
            ))}
        </div>
    );
}

export default App;
