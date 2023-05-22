import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
    const [form, setForm] = useState(false);
    const [home, setHome] = useState(true);

    function toggleHome() {
        setForm(!form);
        setHome(!home);
    }

    return (
        <div className="app-main-container">
            <div className="app-form-container">
                {home && (
                    <div className="app-close-container">
                        <h1>Thanks for visiting</h1>
                        <h2>Register for getting all the updates</h2>
                        <button id="open-form" onClick={toggleHome}>
                            Register Here!
                        </button>
                    </div>
                )}
                {form && (
                    <div className="app-form-inner-container">
                        {" "}
                        <Form />{" "}
                        <button onClick={toggleHome} id="close-form">
                            X
                        </button>{" "}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
