import { useState } from "react";
import { ReactDOM } from "react-dom/client";

function FavoriteColor() {
    const [color , setColor] = useState("Red");

    return <h1>My favorite color {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
