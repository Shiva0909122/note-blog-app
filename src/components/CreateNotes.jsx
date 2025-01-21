import React, { useState } from "react";

function CreateNotes(props) {
    const [note, createNote] = useState({
        heading: "",
        text: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        createNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
        if (name === "text") {
            updateCount(value);
        }
    }

    function addNote(event) {
        event.preventDefault();
        props.add(note);
        createNote({
            heading: "",
            text: ""
        });
    }

    const updateCount = (message) => {
        let wordCount = message.trim() ? message.trim().split(/\s+/).length : 0;
        document.getElementById("word-count").innerText = wordCount;
        document.getElementById("character-count").innerText = message.length;
    };

    return (
        <div>
            <form onSubmit={addNote}>
                <input
                    name="heading"
                    onChange={handleChange}
                    value={note.heading}
                    placeholder="Heading"
                />
                <textarea
                    name="text"
                    onChange={handleChange}
                    value={note.text}
                    placeholder="Write your note here"
                    rows="3"
                    className="message"
                    cols={50}
                    id="message"
                />
                <p className="count-container">
                    <span id="word-count">0</span> words |
                    <span id="character-count">0</span> characters
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateNotes;
