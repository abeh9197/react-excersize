import { useState } from "react";
import { ReactDOM } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("Red");

    return <h1>My favorite color is {color}.</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />)