import React from "react";
import { useParams } from "react-router-dom";

export default function Word(props) {
    // This {color, id} need to match with the one declared in (App.js) Route path
    const { color, id } = useParams();

    return (
        <div>
            <h2>Word Component</h2>
            {/* 'color' can be used as value of attribute OR part of inner text */}
            <h3 style={{ backgroundColor: color }}>
                You type in number : {id}
            </h3>
        </div>
    );
}
