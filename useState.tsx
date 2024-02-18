/* We should never directly update state. Ex: color = "red" is not allowed. */

import { useState } from "react";
import { ReactDOM } from "react-dom/client";

function FavoriteColor() {
    const [color, setColor] = useState("Red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
