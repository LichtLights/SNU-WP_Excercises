import React from "react";
import World from "./world";

export default function Hello() {
    return (
        <>
            <h1>
                Hello,
                <World name = "The Wuorudo" />!
            </h1>

            <img src = "cat.jpg" alt = "cat" />
        </>
    );
}