import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Form(props) {
    const navigate = useNavigate();
    const [color, setColor] = useState("");
    const [number, setNumber] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        // ${color}/${number} <--- refer to <Route path="/word/:color/:id" element={<Word />} /> in App.js
        // The variable may not be the same but the order is what matter
        navigate(`/word/${color}/${number}`);
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Type in color : </label>
                <input
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                />
                <label>Enter a number : </label>
                <input
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                />
                <button>submit</button>
            </form>
        </div>
    );
}
