import React from "react";

function Note(comp) {
    function clickButton() {
        comp.onDelete(comp.id);
    }

    return (
        <div className="box">
            <h1>{comp.heading}</h1>
            <p>{comp.text}</p>
            <button onClick={clickButton}>-</button>
        </div>
    );
}

export default Note;